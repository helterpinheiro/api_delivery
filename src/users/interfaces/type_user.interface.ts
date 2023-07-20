import { Document } from 'mongoose';

export interface TypeUser extends Document {
  readonly _id: string;
  name: string;
}
