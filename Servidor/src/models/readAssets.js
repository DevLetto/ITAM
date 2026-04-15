import db from "../database/db.js";

//Function to show all the assets with the type and status filter

export async function readAssets(filters = {}) {
  let query = `SELECT * FROM equipamentos`;
  const params = [];
  const where = [];

  if (filters.id !== undefined) {
    params.push(filters.id);
    where.push(`id = $${params.length}`);
  }

  if (filters.type) {
    params.push(`%${filters.type}%`);
    where.push(`tipo LIKE $${params.length}`);
  }

  if (filters.status) {
    params.push(`%${filters.status}%`);
    where.push(`status LIKE $${params.length}`);
  }

  if (where.length > 0) {
    query += " WHERE " + where.join(" AND ");
  }

  try {
    const result = await db.query(query, params);

    return result.rows;
  } catch (error) {
    console.error("Error reading assets: ", error.message);
    throw error;
  }
}
