import { ObjectType, Field, Int, ID } from "type-graphql";
import { Player } from "../../player/dto/player.dto";

@ObjectType()
export class Game {
  @Field(() => ID)
  id: string;
  @Field()
  startTime: Date;
  @Field({ nullable: true })
  endTime: Date;
  @Field(() => [Player], { defaultValue: [] })
  players: Player[];
}
