import * as mongoose from 'mongoose';

export const LaptopSchema = new mongoose.Schema({
  gpu: String,
  cpu: String,
  ram: String,
  ramType: String,
  size: String,
  brand: String,
  model: String,
  year: Number,
});
