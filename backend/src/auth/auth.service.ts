import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { JWT_SECRET } from './constants';

@Injectable()
export class AuthService {
    constructor(
        private readonly userSerivce: UserService,
        private readonly jwtService: JwtService,
    ) {}

    async validate(username: string, password: string): Promise<User | null> {
        const user = await this.userSerivce.getUser(username);
        if (!user) return null;

        const isPasswordValid = await compare(password, user.password);
        return isPasswordValid ? user : null;
    }

    async login(user: User): Promise<{ access_token: string }> {
        const payload = {
            username: user.username,
            sub: user.id,
        };

        return {
            access_token: this.jwtService.sign(payload),
        };
    }

    async verify(token: string): Promise<User | null> {
        const decoded_token = this.jwtService.verify(token, {
            secret: JWT_SECRET,
        });

        return this.userSerivce.getUser(decoded_token.username);
    }
}
