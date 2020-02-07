import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    // MongooseModule.forRoot('mongodb://database/mest-docker'),
    GraphQLModule.forRoot({
      debug: false,
      playground: false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
