import { Field, Int, InputType } from "type-graphql";

@InputType()
export class GameInput {
  @Field({ nullable: true })
  startTime: Date;
  @Field({ nullable: true })
  endTime: Date;
  @Field(() => Int, { nullable: true })
  stayPresses: number;
  @Field(() => Int, { nullable: true })
  leavePresses: number;
}
