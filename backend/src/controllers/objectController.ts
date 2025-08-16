import { Request, Response } from "express";
import { Object } from "../models/3dModel";

export const getAllObjects = async (req: Request, res: Response) => {
  try {
    const objects = await Object.find();

    const fullHost = `${req.protocol}://${req.get("host")}`;

    const formatted = objects.map((o) => ({
      id: o.id,
      type: o.type,
      metadata: {
        category: o.metadata?.category,
        material: o.metadata?.material,
        price: o.metadata?.price,
      },
      modelPath: `${fullHost}/${o.modelPath}`,
    }));
    res.status(200).json(formatted);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

export const getObjectById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const object = await Object.findOne({ id });

    if (!object) {
      return res.status(404).json({ message: "Object not found" });
    }

    const fullHost = `${req.protocol}://${req.get("host")}`;

    const formatted = {
      id: object?.id,
      type: object?.type,
      metadata: {
        category: object?.metadata?.category,
        material: object?.metadata?.material,
        price: object?.metadata?.price,
      },
      modelPath: `${fullHost}/${object?.modelPath}`,
    };
    res.status(200).json(formatted);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error });
  }
};
