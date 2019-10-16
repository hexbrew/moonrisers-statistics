import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { GameService } from "./game.service";
import { GameDto } from "./dto/game.dto";
import { GameInput } from "./inputs/game.input";

@Resolver()
export class GameResolver {
  constructor(private readonly gameService: GameService) {}

  @Query(() => [GameDto])
  async games() {
    return this.gameService.findAll()
  }

  @Mutation(() => GameDto)
  async createGame(@Args('input') input: GameInput) {
    // if(!input.startTime) {
    //   input.startTime = new Date();
    // }

    return this.gameService.create(input)
  }
}
