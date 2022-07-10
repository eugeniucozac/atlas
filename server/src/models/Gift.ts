import { Document, model, Schema } from 'mongoose';

export interface GiftType extends Document {
  name: string;
  price: string;
}

const giftSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Gift = model<GiftType>('Gift', giftSchema);

export default Gift;
