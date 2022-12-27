import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserInput } from './dtos/user.input';
import { User } from './user.entity';
import { hash } from 'bcrypt';

const saltRounds: number = 8;

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
    ) {}

    async createUser(user: UserInput): Promise<User> {
        const { username, password } = user;

        if (await this.getUser(username)) {
            throw new Error('Username is taken!');
        }

        const hashedPassword = await hash(password, saltRounds);
        const newUser = this.userRepository.create({
            username,
            password: hashedPassword,
        } as User);

        return this.userRepository.save(newUser);
    }

    async getUser(name: string): Promise<User> {
        const user = await this.userRepository.findOneBy({ username: name });
        return user;
    }
}
