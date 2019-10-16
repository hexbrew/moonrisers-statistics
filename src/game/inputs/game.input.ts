import { Field, Int, InputType } from "type-graphql";

@InputType()
export class GameInput {
  @Field({nullable: true})
  readonly startTime: Date;
  @Field({nullable: true})
  readonly endTime: Date;
  @Field(() => Int)
  readonly numPlayers: number;
}
