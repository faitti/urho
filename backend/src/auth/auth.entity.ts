import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserLogin {
    @Field()
    access_token: string;
}
