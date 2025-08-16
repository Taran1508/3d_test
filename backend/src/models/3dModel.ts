import mongoose from "mongoose";
import { data } from "../data/3d";
import connectDB from "../config/db";

const objectSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  type: { type: String, required: true },
  metadata: {
    category: { type: String, required: true },
    material: { type: String, required: true },
    price: { type: Number, required: true },
  },
  modelPath: { type: String, required: true },
});

export const Object = mongoose.model("Object", objectSchema);

// connectDB()
//   .then(async () => {
//     await Object.deleteMany(); // Optional: Clear previous data
//     const inserted = await Object.insertMany(data);
//     console.log("Data inserted:", inserted);
//   })
//   .catch((err) => console.error("Insert error:", err))
//   .finally(() => mongoose.disconnect());
