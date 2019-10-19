import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Game } from "./interfaces/game.interface";
import { GameInput } from "./inputs/game.input";
import { PlayerService } from "../player/player.service";

@Injectable()
export class GameService {
  constructor(
    @InjectModel("Game") private readonly gameModel: Model<Game>,
    private readonly playerService: PlayerService
  ) {}

  async create(gameInput: GameInput): Promise<Game> {
    let createdGame = new this.gameModel(gameInput);

    if (!createdGame.startTime) {
      createdGame.startTime = new Date();
    }

    return await createdGame.save();
  }

  async addPlayers(gameID: String, playerIDs: [String]): Promise<Game> {
    let game = await this.gameModel.findById(gameID);
    let players = await this.playerService.findMany({ _id: { $in: playerIDs } });
    console.log(players);

    if (game.players == null) {
      game.players = [];
    }

    players.forEach(p => {
      game.players.push(p);
    });

    console.log(game.players);

    return await game.save();
  }

  async find(options): Promise<Game> {
    return await this.gameModel.find(options).exec();
  }

  async findAll(): Promise<Game> {
    return await this.gameModel.find().exec();
  }
}
