import { Document } from 'mongoose';

export interface Vehicle extends Document {
  readonly brand: string;
  readonly model: string;
  readonly year: number;
  readonly new: boolean;
  readonly milleage: number;
}
