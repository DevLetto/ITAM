import { showAssets } from "../models/showAssets.js";

export default async function showAssetsController(req, res) {
  try {
    const filters = req.query;
    const data = await showAssets(filters);
    res.status(200).json(data);
  } catch (error) {
    console.error("Error in showAssetsController: ", error.message);
    res.status(500).json({ error: "Error on server" });
  }
}
