import { ObjectType, Field, Int, ID } from "type-graphql";
import 

@ObjectType()
export class Game {
  @Field(() => ID)
  id: string;
  @Field()
  readonly startTime: Date;
  @Field({ nullable: true })
  readonly endTime: Date;
  @Field(() => Int)
  readonly numPlayers: number;
}
