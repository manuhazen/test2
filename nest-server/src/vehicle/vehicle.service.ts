import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Vehicle } from './interfaces/vehicle.interface';
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

  async update(id: string, data: VehicleInput): Promise<Vehicle> {
    await this.vehicleModel.update({ _id: id }, data);
    return this.vehicleModel.findOne({ _id: id });
  }

  async delete(id: string) {
    await this.vehicleModel.deleteOne({ _id: id });
  }

  async findAll(): Promise<Vehicle[]> {
    return this.vehicleModel.find().exec();
  }
}
