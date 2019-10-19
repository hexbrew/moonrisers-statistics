import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { GameService } from "./game.service";
import { Game } from "./dto/game.dto";
import { GameInput } from "./inputs/game.input";
import { Player } from "src/player/dto/player.dto";

@Resolver()
export class GameResolver {
  constructor(private readonly gameService: GameService) {}

  @Query(() => [Game])
  async games() {
    return this.gameService.findAll();
  }

  @Query(() => [Game])
  async gamesBeforeDate(@Args("date") date: Date) {
    return this.gameService.find({ startTime: { $lte: date } });
  }

  @Mutation(() => Game)
  async createGame(@Args("input") input: GameInput) {
    return this.gameService.create(input);
  }

  @Mutation(() => Game)
  async addPlayers(
    @Args({ name: "gameID", type: () => String }) gameID: String,
    @Args({ name: "playerIDs", type: () => [String] }) playerIDs: [String]
  ) {
    return this.gameService.addPlayers(gameID, playerIDs);
  }
}
