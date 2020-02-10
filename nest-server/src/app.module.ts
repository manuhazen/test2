import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { VehicleModule } from './vehicle/vehicle.module';
import { ApartmentModule } from './apartament/apartment.module';
import { LaptopModule } from './laptop/laptop.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://database/mest-docker', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      playground: true,
      debug: true,
    }),
    VehicleModule,
    ApartmentModule,
    LaptopModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
