import db from "../database/db.js";

export async function updateAssets(id, data) {
  try {
    const query = `
        UPDATE equipamentos
        SET nome = $1,
            tipo = $2,
            data_de_aquisicao = $3,
            status = $4
        WHERE id = $5
        RETURNING *;
        `;
    const values = [
      data.name,
      data.type,
      data.acquisitionDate,
      data.status,
      id,
    ];

    const result = await db.query(query, values);

    return result.rows[0];
  } catch (error) {
    console.error("Error updating assets", error.message);
    throw error;
  }
}
