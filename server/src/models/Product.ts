import { Document, model, Schema } from 'mongoose';

export interface ProductType extends Document {
  name: string;
  price: string;
  src: string;
  type: 'physical' | 'virtual';
}

const productSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  src: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['physical', 'virtual'],
    default: 'physical',
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

const Product = model<ProductType>('Product', productSchema);

export default Product;
