import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://taran1508:John1508@cluster1508.q0lfcwg.mongodb.net/test_db?retryWrites=true&w=majority&appName=Cluster1508"
    );
    console.log("MongoDB connected");
  } catch (err) {
    console.error(err);
  }
};

export default connectDB;
