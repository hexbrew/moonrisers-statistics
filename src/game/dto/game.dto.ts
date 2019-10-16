import { ObjectType, Field, Int, ID } from "type-graphql";

@ObjectType()
export class GameDto {
  @Field(() => ID)
  id: string;
  @Field()
  readonly startTime: Date;
  @Field({ nullable: true })
  readonly endTime: Date;
  @Field(() => Int)
  readonly numPlayers: number;
}
