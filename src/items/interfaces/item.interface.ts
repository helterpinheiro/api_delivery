import { Document } from 'mongoose';

export interface Item extends Document {
  readonly _id: string;
  name: string;
  description: string;
  brand: string;
}
