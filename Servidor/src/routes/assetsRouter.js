import express from "express";
import register from "../controller/registerAssetController.js";
import show from "../controller/showAssetsController.js";

//Creating a router for every actions
const router = express.Router();

router.post("/", register);
router.get("/", show);

export default router;
