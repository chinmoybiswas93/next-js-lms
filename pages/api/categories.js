import { connect } from "./db";

export default async function handler(req, res) {
  const connection = await connect();

  try {
    const [rows] = await connection.query("SELECT * FROM `categories`");
    res.status(200).json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Unexpected error occurred" });
  } finally {
    connection.end();
  }
}
