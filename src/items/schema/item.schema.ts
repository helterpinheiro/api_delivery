import * as mongoose from 'mongoose';

export const ItemSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    brand: String,
  },
  { timestamps: true, colletion: 'items' },
);
