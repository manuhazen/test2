import * as mongoose from 'mongoose';

export const VehicleSchema = new mongoose.Schema({
  brand: String,
  model: String,
  year: String,
  new: Boolean,
  milleage: Number,
});
