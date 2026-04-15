import {registerAsset} from "../models/registerAsset.js";

//Controller function to handle asset registration requests
export default async function registerAssetController(req, res) {
  try {
    const assetData = req.body;
    await registerAsset(assetData);
    return res.status(201).json({ message: "Asset registered successfully" });
  } catch (error) {
    console.error("Error in registerAssetController: ", error.message);
    return res.status(500).json({ error: "Failed to register asset" });
  }
}
