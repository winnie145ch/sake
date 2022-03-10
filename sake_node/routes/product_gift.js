const router = require("express").Router();
const db = require("../modules/connect-db");

router.get("/", async (req, res) => {
  const sql = "SELECT * FROM product_sake WHERE pro_gift LIKE";
  const [rs, fields] = await db.query(sql);
  res.json(rs);
});

module.exports = router;
