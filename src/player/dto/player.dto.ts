import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class Player {
  @Field(() => ID)
  id: string;
  @Field()
  username: string;
}
