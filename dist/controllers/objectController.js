"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getObjectById = exports.getAllObjects = void 0;
const _3dModel_1 = require("../models/3dModel");
const getAllObjects = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const objects = yield _3dModel_1.Object.find();
        const fullHost = `${req.protocol}://${req.get("host")}`;
        const formatted = objects.map((o) => {
            var _a, _b, _c;
            return ({
                id: o.id,
                type: o.type,
                metadata: {
                    category: (_a = o.metadata) === null || _a === void 0 ? void 0 : _a.category,
                    material: (_b = o.metadata) === null || _b === void 0 ? void 0 : _b.material,
                    price: (_c = o.metadata) === null || _c === void 0 ? void 0 : _c.price,
                },
                modelPath: `${fullHost}/${o.modelPath}`,
            });
        });
        res.status(200).json(formatted);
    }
    catch (err) {
        res.status(500).json({ message: "Server error", error: err });
    }
});
exports.getAllObjects = getAllObjects;
const getObjectById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    try {
        const id = Number(req.params.id);
        const object = yield _3dModel_1.Object.findOne({ id });
        if (!object) {
            return res.status(404).json({ message: "Object not found" });
        }
        const fullHost = `${req.protocol}://${req.get("host")}`;
        const formatted = {
            id: object === null || object === void 0 ? void 0 : object.id,
            type: object === null || object === void 0 ? void 0 : object.type,
            metadata: {
                category: (_a = object === null || object === void 0 ? void 0 : object.metadata) === null || _a === void 0 ? void 0 : _a.category,
                material: (_b = object === null || object === void 0 ? void 0 : object.metadata) === null || _b === void 0 ? void 0 : _b.material,
                price: (_c = object === null || object === void 0 ? void 0 : object.metadata) === null || _c === void 0 ? void 0 : _c.price,
            },
            modelPath: `${fullHost}/${object === null || object === void 0 ? void 0 : object.modelPath}`,
        };
        res.status(200).json(formatted);
    }
    catch (error) {
        res.status(500).json({ message: "Server error", error: error });
    }
});
exports.getObjectById = getObjectById;
