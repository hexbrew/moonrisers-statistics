import { Document, Ty } from "mongoose";

export interface Game extends Document {
  startTime: Date;
  endTime: Date;
  stayPresses: number;
  leavePresses: number;
}
