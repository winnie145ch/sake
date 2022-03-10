const router = require("express").Router();
const db = require("../modules/connect-db");

// Get all restaurant : http://localhost:3000/api/restaurant
router.get("/", async (req, res) => {
  const sql = "SELECT * FROM restaurant";
  const [rs, fields] = await db.query(sql);
  res.json(rs);
});

module.exports = router;
