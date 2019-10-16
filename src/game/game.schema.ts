import * as mongoose from 'mongoose';

export const GameSchema = new mongoose.Schema({
    startTime: Date,
    endTime: Date,
    numPlayers: Number
    // players: [Player]
})