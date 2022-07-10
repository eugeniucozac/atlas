import { connect } from 'mongoose';
let monURI = `mongodb+srv://admiral:${process.env.MONGO_DB_PASSWORD}@cluster0.ww0rglw.mongodb.net/?retryWrites=true&w=majority`;

const connectDB = async () => {
  try {
    await connect(monURI);
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
