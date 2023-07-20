import * as mongoose from 'mongoose';

export const ItemSchema = new mongoose.Schema(
  {
    nome: String,
    description: String,
    brand: String,
  },
  { timestamps: true, colletion: 'items' },
);
