import { connect } from "./db";

export default async function handler(req, res) {
  const connection = await connect();

  try {
    const [details] = await connection.query(
      "SELECT * FROM `coursedetails` WHERE id=" + `${req.query.id}`
    );
    const [courseModule] = await connection.query(
      "SELECT * FROM `coursemodule` WHERE courseId=" + `${req.query.id}`
    );

    const courseDetails = {
      details: details,
      courseModule: courseModule,
    };

    res.status(200).json(courseDetails);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Unexpected error occurred" });
  } finally {
    connection.end();
  }
}
