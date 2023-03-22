import { connect } from "./db";

export default async function handler(req, res) {
  const connection = await connect();
  try {
    // console.log(req.query.category);
    let query = "";
    if (!req.query.category || req.query.category == 1) {
      query = "SELECT * FROM `courses`";
    } else {
      query = "SELECT * FROM `courses` WHERE category=" + req.query.category;
    }
    const [rows] = await connection.query(query);
    res.status(200).json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Unexpected error occurred" });
  } finally {
    connection.end();
  }
}
