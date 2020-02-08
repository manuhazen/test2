import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Vehicle } from './interfaces/vehicle.interface';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { VehicleInput } from './inputs/vehicle.input';

@Injectable()
export class VehicleService {
  constructor(
    @InjectModel('Vehicle') private readonly vehicleModel: Model<Vehicle>,
  ) {}

  async create(createVehicleDto: VehicleInput): Promise<Vehicle> {
    const createdVehicle = new this.vehicleModel(createVehicleDto);
    return createdVehicle.save();
  }

  async findAll(): Promise<Vehicle[]> {
    return this.vehicleModel.find().exec();
  }
}
