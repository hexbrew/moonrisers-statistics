import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { GameService } from "./game.service";
import { Game } from "./dto/game.dto";
import { GameInput } from "./inputs/game.input";

@Resolver()
export class GameResolver {
  constructor(private readonly gameService: GameService) {}

  @Query(() => [GameDto])
  async games() {
    return this.gameService.findAll()
  }

  @Query(() => [GameDto])
  async gamesBeforeDate(@Args('input') date: Date) {
    return this.gameService.find({ startTime: { $lte: date }});
  }

  @Mutation(() => GameDto)
  async createGame(@Args('input') input: GameInput) {
    return this.gameService.create(input)
  }
}
