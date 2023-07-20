import { Document } from 'mongoose';
import { TypeUser } from './type_user.interface';

export interface User extends Document {
  readonly _id: string;
  name: string;
  email: string;
  password: string;
  address: string;
  doc: string;
  isDeleted: boolean;
  type_user: TypeUser;
}
