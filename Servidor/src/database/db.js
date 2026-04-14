import dotenv from 'dotenv'
dotenv.config()

import pg from 'pg'
const { Client } = pg

//Configuring the connection to the database
const client = new Client({
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    password: process.env.DB_PASSWORD,
    database: 'itam'
})

client.connect()

client.query(`SELECT * FROM  equipamentos`, (err, res) => {
    if (!err){
        console.log(res.rows);

    }else{
        console.log(err.message);
    }
})

export default client;