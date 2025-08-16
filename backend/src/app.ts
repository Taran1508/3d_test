import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Request, Response } from "express";
import getAll, { getByID } from "./routes/objectRoute";
import logger from "./middleware/logger";
import path from "path";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);
app.use(express.urlencoded({ extended: true })); 
app.use("/fbx", express.static(path.join(__dirname, "../public/fbx")));

app.get("/", (Request, Response) => {
  Response.status(200).send("Backend Working");
});

app.use("/objects", getAll);

app.get("/objects", getByID);

export default app;
