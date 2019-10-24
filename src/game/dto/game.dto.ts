import { ObjectType, Field, ID, Int } from "type-graphql";

@ObjectType()
export class Game {
  @Field(() => ID)
  id: string;
  @Field()
  startTime: Date;
  @Field({ nullable: true })
  endTime: Date;
  @Field(() => Int, { defaultValue: 0 })
  stayPresses: number;
  @Field(() => Int, { defaultValue: 0 })
  leavePresses: number;
}
