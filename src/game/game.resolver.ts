import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { GameService } from "./game.service";
import { Game } from "./dto/game.dto";
import { GameInput } from "./inputs/game.input";

@Resolver()
export class GameResolver {
  constructor(private readonly gameService: GameService) {}

  @Query(() => [Game])
  async games() {
    return this.gameService.findMany();
  }

  @Query(() => [Game])
  async lastGame() {
    return this.gameService.findOneWithSort({}, { endTime: -1 });
  }

  @Query(() => [Game])
  async gamesBeforeDate(@Args("date") date: Date) {
    return this.gameService.findOne({ startTime: { $lte: date } });
  }

  @Mutation(() => Game)
  async createGame(@Args("input") input: GameInput) {
    return this.gameService.create(input);
  }
}
