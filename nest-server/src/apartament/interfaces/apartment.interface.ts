import { Document } from 'mongoose';

export interface Apartment extends Document {
  readonly type: string;
  readonly size: number;
  readonly rooms: number;
  readonly island: boolean;
  readonly balcony: boolean;
  readonly bathrooms: number;
}
