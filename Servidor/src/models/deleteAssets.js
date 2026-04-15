import db from "../database/db.js";

export async function deleteAssets(id) {
  try {
    const query = `DELETE FROM equipamentos
         WHERE id = $1
         RETURNING *
         `;

    const result = await db.query(query, [id]);
    return result.rows[0];
  } catch (error) {
    console.error("Error deleting Asset: ", error.message);
    throw error;
  }
}
