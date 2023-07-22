import * as mongoose from 'mongoose';

export const PurchaseShema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    item: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item',
      },
    ],
    qtd: { type: Number },
  },
  { timestamps: true, collection: 'purchases' },
);
