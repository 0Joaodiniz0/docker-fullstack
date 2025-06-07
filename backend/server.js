const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
const port = 3001;
app.use(cors());

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.DB_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: 5432
});

app.get("/", async (req, res) => {
  const result = await pool.query("SELECT NOW()");
  res.json(result.rows);
});

app.listen(port, () => console.log(`Backend rodando na porta ${port}`));
