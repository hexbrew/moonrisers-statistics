import * as mongoose from "mongoose";

export const GameSchema = new mongoose.Schema({
  startTime: Date,
  endTime: Date,
  stayPresses: Number,
  leavePresses: Number,
});
