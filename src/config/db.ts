import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoURI: string = process.env.MONGO_URI ?? "";

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("MongoDB connected");
  } catch (err) {
    console.error(err);
  }
};

export default connectDB;
