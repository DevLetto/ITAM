import dotenv from "dotenv";
dotenv.config();

//Here ill be the connection to the database and the configuration of the server, as well as the routes for the API

import db from "./database/db.js";
import cors from "cors";
import express from "express";
const app = express();
const port = 8080;

import assetsRouter from "./routes/assetsRouter.js";

//This is to let the server accept JSON data in the request body
app.use(express.json());

//This is to allow others domains (with diffetent ports) to acess the backend
app.use(cors());

//Function to test the connection with the database when the server starts
async function testConnection() {
  try {
    const res = await db.query("SELECT * FROM equipamentos");
    console.log(res.rows);
  } catch (error) {
    console.error("Error connecting to the database: ", error.message);
  }
}

testConnection();

app.use("/assets", assetsRouter);

app.listen(port, () => console.log(`Server running on port ${port}`));
