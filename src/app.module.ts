import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { GameModule } from "./game/game.module";

@Module({
  imports: [
    GameModule,
    GraphQLModule.forRoot({
      autoSchemaFile: "schema.gql"
    }),
    MongooseModule.forRoot(
      "mongodb+srv://moonrisersUser:l3tm3in@cluster0-llm73.mongodb.net/test?retryWrites=true&w=majority"
    )
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
