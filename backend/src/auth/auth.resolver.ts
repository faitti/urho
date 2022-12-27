import { UnauthorizedException } from '@nestjs/common';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { User } from 'src/user/user.entity';
import { UserLogin } from './auth.entity';
import { AuthService } from './auth.service';

@Resolver()
export class AuthResolver {
    constructor(private authService: AuthService) {}

    @Query(() => UserLogin, { nullable: true })
    async loginUser(
        @Args('name') name: string,
        @Args('password') password: string,
    ): Promise<UserLogin> {
        const user = await this.authService.validate(name, password);
        if (!user) throw new UnauthorizedException('Invalid credentials');
        return await this.authService.login(user);
    }
}
