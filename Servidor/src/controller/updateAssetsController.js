import { updateAssets } from "../models/updateAssets.js";

export default async function updateAssetsController(req, res) {
  try {
    const { id } = req.params;
    const data = req.body;

    const update = await updateAssets(id, data);

    res.status(200).json(update);
  } catch (error) {
    console.error("Error on updateAssetsController:", error.message);
    res.status(500).json({ error: "Error on server" });
  }
}
