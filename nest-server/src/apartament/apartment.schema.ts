import * as mongoose from 'mongoose';

export const ApartmentSchema = new mongoose.Schema({
  type: String,
  size: Number,
  rooms: Number,
  island: Boolean,
  balcony: Boolean,
  bathrooms: Number,
});
