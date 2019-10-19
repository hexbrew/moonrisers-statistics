import { Field, Int, InputType } from "type-graphql";

@InputType()
export class PlayerInput {
  @Field()
  username: string;
}
