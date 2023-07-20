import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    password: { type: String },
    address: { type: String },
    doc: { type: String },
    isDeleted: { type: Boolean },
    type_user: { type: mongoose.Schema.Types.ObjectId, ref: 'TypeUser' },
  },
  { timestamps: true, collection: 'users' },
);
