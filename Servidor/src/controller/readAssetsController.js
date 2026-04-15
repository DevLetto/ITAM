import { readAssets } from "../models/readAssets.js";

export default async function readAssetsController(req, res) {
  try {
    const filters = req.query;
    const data = await readAssets(filters);
    res.status(200).json(data);
  } catch (error) {
    console.error("Error in readAssetsController: ", error.message);
    res.status(500).json({ error: "Error on server" });
  }
}
