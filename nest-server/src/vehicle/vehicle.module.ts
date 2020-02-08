import { Module } from '@nestjs/common';
import { VehicleResolver } from './vehicle.resolver';
import { VehicleSchema } from './vehicle.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { VehicleService } from './vehicle.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Vehicle', schema: VehicleSchema }]),
  ],
  providers: [VehicleResolver, VehicleService],
})
export class VehicleModule {}
