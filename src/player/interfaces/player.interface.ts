import {Document} from 'mongoose';

export interface Player extends Document {
    readonly username: string;
}