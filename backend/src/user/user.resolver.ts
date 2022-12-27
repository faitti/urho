import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { UserInput } from './dtos/user.input';
import { User } from './user.entity';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
    constructor(private userService: UserService) {}

    @Query(() => User, { nullable: true })
    async getUser(@Args('name') name: string): Promise<User> {
        return this.userService.getUser(name);
    }

    @Mutation(() => User)
    async createUser(@Args('user') user: UserInput) {
        return this.userService.createUser(user);
    }
}
