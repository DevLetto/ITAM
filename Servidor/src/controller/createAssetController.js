import {createAsset} from "../models/createAsset.js";

//Controller function to handle asset registration requests
export default async function createAssetController(req, res) {
  try {
    const assetData = req.body;
    await createAsset(assetData);
    return res.status(201).json({ message: "Asset created successfully" });
  } catch (error) {
    console.error("Error in createAssetController: ", error.message);
    return res.status(500).json({ error: "Failed to create asset" });
  }
}
