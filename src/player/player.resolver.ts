import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { PlayerService } from "./player.service";
import { Player } from "./dto/player.dto";
import { PlayerInput } from "./inputs/player.input";

@Resolver()
export class PlayerResolver {
  constructor(private readonly playerService: PlayerService) {}

  @Query(() => [PlayerDto])
  async players() {
    return this.playerService.findAll()
  }

  @Mutation(() => PlayerDto)
  async createPlayer(@Args('input') input: PlayerInput) {
    return this.playerService.create(input)
  }
}
