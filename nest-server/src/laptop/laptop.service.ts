import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Laptop } from './interfaces/laptop.interface';
import { LaptopInput } from './inputs/laptop.input';
import { UpdateLaptopInput } from './inputs/update-laptop.input';

@Injectable()
export class LaptopService {
  constructor(
    @InjectModel('Laptop') private readonly laptopModel: Model<Laptop>,
  ) {}

  async create(createLaptopDto: LaptopInput): Promise<Laptop> {
    const createdLaptop = new this.laptopModel(createLaptopDto);
    return createdLaptop.save();
  }

  async update(id: string, data: UpdateLaptopInput): Promise<Laptop> {
    await this.laptopModel.updateOne({ _id: id }, data);
    return this.laptopModel.findOne({ _id: id });
  }

  async delete(id: string) {
    await this.laptopModel.deleteOne({ _id: id });
  }

  async findAll(): Promise<Laptop[]> {
    return this.laptopModel.find().exec();
  }
}
