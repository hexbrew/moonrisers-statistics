import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Game } from "./interfaces/game.interface";
import { GameInput } from "./inputs/game.input";

@Injectable()
export class GameService {
  constructor(
    @InjectModel("Game") private readonly gameModel: Model<Game>,
  ) {}

  async create(gameInput: GameInput): Promise<Game> {
    let createdGame = new this.gameModel(gameInput);

    if (!createdGame.startTime) {
      createdGame.startTime = new Date();
    }

    return await createdGame.save();
  }

  async findOneWithSort(options?, sort?): Promise<Game> {
    return await this.gameModel.findOne(options).sort(sort).exec();
  }

  async findOne(options?): Promise<Game> {
    return await this.gameModel.findOne(options).exec();
  }

  async findMany(options?): Promise<Game[]> {
    return await this.gameModel.find(options).exec();
  }
}
