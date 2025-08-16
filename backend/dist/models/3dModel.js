"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Object = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const objectSchema = new mongoose_1.default.Schema({
    id: { type: Number, required: true },
    type: { type: String, required: true },
    metadata: {
        category: { type: String, required: true },
        material: { type: String, required: true },
        price: { type: Number, required: true },
    },
    modelPath: { type: String, required: true },
});
exports.Object = mongoose_1.default.model("Object", objectSchema);
// connectDB()
//   .then(async () => {
//     await Object.deleteMany(); // Optional: Clear previous data
//     const inserted = await Object.insertMany(data);
//     console.log("Data inserted:", inserted);
//   })
//   .catch((err) => console.error("Insert error:", err))
//   .finally(() => mongoose.disconnect());
