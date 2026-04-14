import db from "../database/db.js";

//Function to register an asset in the database
export async function registerAsset(data) {
  try {
    const query = `INSERT INTO equipamentos (nome, tipo, data_de_aquisicao, status) VALUES ($1, $2, $3, $4)`;

    const values = [data.name, data.type, data.acquisitionDate, data.status];

    await db.query(query, values);
    console.log("Assets registered successfully");
  } catch (error) {
    console.error("Error registering asset: ", error.message);
    throw error;
  }
}
