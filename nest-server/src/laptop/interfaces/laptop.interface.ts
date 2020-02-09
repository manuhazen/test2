import { Document } from 'mongoose';

export interface Laptop extends Document {
  readonly gpu: string;
  readonly cpu: string;
  readonly ram: string;
  readonly ramType: string;
  readonly size: string;
  readonly brand: string;
  readonly model: string;
  readonly year: number;
}
