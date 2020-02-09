import { Module } from '@nestjs/common';
import { LaptopResolver } from './laptop.resolvers';
import { LaptopSchema } from './laptop.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { LaptopService } from './laptop.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Laptop', schema: LaptopSchema }]),
  ],
  providers: [LaptopResolver, LaptopService],
})
export class LaptopModule {}
