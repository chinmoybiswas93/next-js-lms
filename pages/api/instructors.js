import { connect } from "./db";

export default async function handler(req, res) {
  const connection = await connect();

  try {
    if (req.query.id) {
      const [rows] = await connection.query(
        "SELECT * FROM `instructors` WHERE id=" + `${req.query.id}`
      );
      res.status(200).json(rows);
    } else {
      const [rows] = await connection.query("SELECT * FROM `instructors`");
      res.status(200).json(rows);
    }
  } catch (err) {
    //catch error and display it to console
    console.error(err);
    res.status(500).json({ error: "Unexpected error occurred" });
  } finally {
    // Close the connection when you're done using it
    connection.end();
  }
}
