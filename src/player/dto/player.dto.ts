import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class PlayerDto {
  @Field(() => ID)
  id: string;
  @Field()
  readonly username: string;
}
