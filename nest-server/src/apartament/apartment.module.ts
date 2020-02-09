import { Module } from '@nestjs/common';
import { ApartmentResolver } from './apartment.resolvers';
import { ApartmentSchema } from './apartment.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ApartmentService } from './apartment.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Apartment', schema: ApartmentSchema }]),
  ],
  providers: [ApartmentResolver, ApartmentService],
})
export class ApartmentModule {}
