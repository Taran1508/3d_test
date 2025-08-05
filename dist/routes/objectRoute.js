"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByID = void 0;
const express_1 = __importDefault(require("express"));
const objectController_1 = require("../controllers/objectController");
const router = express_1.default.Router();
router.get("/", objectController_1.getAllObjects);
exports.getByID = router.get("/:id", objectController_1.getObjectById);
exports.default = router;
