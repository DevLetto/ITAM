import express from "express";
import create from "../controller/createAssetController.js";
import read from "../controller/readAssetsController.js";
import update from "../controller/updateAssetsController.js";
import deleted from "../controller/deleteAssetsController.js"

//Creating a router for every actions
const router = express.Router();

router.post("/", create);
router.get("/", read);
router.put("/:id", update);
router.delete("/:id", deleted)

export default router;
