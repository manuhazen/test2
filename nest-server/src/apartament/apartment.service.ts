import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Apartment } from './interfaces/apartment.interface';
import { ApartmentInput } from './inputs/apartment.input';

@Injectable()
export class ApartmentService {
  constructor(
    @InjectModel('Apartment') private readonly apartmentModel: Model<Apartment>,
  ) {}

  async create(createApartmentDto: ApartmentInput): Promise<Apartment> {
    const createdVehicle = new this.apartmentModel(createApartmentDto);
    return createdVehicle.save();
  }

  async update(id: string, data: ApartmentInput): Promise<Apartment> {
    await this.apartmentModel.updateOne({ _id: id }, data);
    return this.apartmentModel.findOne({ _id: id });
  }

  async delete(id: string) {
    await this.apartmentModel.deleteOne({ _id: id });
  }

  async findAll(): Promise<Apartment[]> {
    return this.apartmentModel.find().exec();
  }
}
