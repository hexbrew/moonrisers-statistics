import { Field, Int, InputType } from "type-graphql";

@InputType()
export class PlayerInput {
  @Field()
  readonly username: string;
}
