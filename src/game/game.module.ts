import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { GameResolver } from "./game.resolver";
import { GameSchema } from "./game.schema";
import { GameService } from "./game.service";

@Module({
  imports: [MongooseModule.forFeature([{ name: "Game", schema: GameSchema }])],
  providers: [GameResolver, GameService]
})
export class GameModule {}
