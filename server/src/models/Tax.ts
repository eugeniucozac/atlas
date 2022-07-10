import { Document, model, Schema } from 'mongoose';

export interface TaxType extends Document {
  name: string;
  price: string;
}

const taxSchema: Schema = new Schema({
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

const Tax = model<TaxType>('Tax', taxSchema);

export default Tax;
