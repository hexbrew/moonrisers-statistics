import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Player } from "./interfaces/player.interface";
import { PlayerInput } from "./inputs/player.input";

@Injectable()
export class PlayerService {
  constructor(@InjectModel("Player") private readonly playerModel: Model<Player>) {}

  async create(playerInput: PlayerInput): Promise<Player> {
    const createdPlayer = new this.playerModel(playerInput);
    return await createdPlayer.save();
  }

  async findOne(options?): Promise<Player> {
    return await this.playerModel.find(options).exec();
  }

  async findMany(options?): Promise<Player[]> {
    return await this.playerModel.find(options).exec();
  }
}
