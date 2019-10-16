import { Document } from "mongoose";

export interface Game extends Document {
  readonly startTime: Date;
  readonly endTime: Date;
  readonly numPlayers: number;
}
