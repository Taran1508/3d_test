import express from "express";
import { getAllObjects, getObjectById } from "../controllers/objectController";

const router = express.Router();

router.get("/", getAllObjects);

export const getByID = router.get("/:id", getObjectById);

export default router;
