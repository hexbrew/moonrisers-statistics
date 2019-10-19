import { Document } from "mongoose";
import { Player } from "../../player/interfaces/player.interface";

export interface Game extends Document {
  startTime: Date;
  endTime: Date;
  players: [Player];
}
