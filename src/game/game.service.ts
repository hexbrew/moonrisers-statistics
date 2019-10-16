import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Game } from "./interfaces/game.interface";
import { GameInput } from "./inputs/game.input";

@Injectable()
export class GameService {
  constructor(@InjectModel("Game") private readonly gameModel: Model<Game>) {}

  async create(gameInput: GameInput): Promise<Game> {
    let createdGame = new this.gameModel(gameInput);

    if (!createdGame.startTime) {
      createdGame.startTime = new Date();
    }

    console.log(createdGame);
    return await createdGame.save();
  }

  async findAll(): Promise<Game> {
    return await this.gameModel.find().exec();
  }
}
