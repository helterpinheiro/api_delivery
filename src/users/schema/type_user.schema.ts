import * as mongoose from 'mongoose';

export const TypeUserSchema = new mongoose.Schema(
  {
    name: { type: String },
  },
  { timestamps: true, collection: 'type_users' },
);
