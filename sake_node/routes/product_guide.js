const router = require("express").Router();
const db = require("../modules/connect-db");

router.get("/", async (req, res) => {
  if(req.query.ans){
    const {ans} = req.query;
    const sql = `SELECT * FROM product_sake ps JOIN  product_format pf ON pf.format_id = ps.format_id WHERE pf.pro_taste = {ans} AND pf.pro_temp = {ans} AND pf.pro_price IN ({ans},{ans})`
    const [rs, fields] = await db.query(sql);
    res.json(rs);
  }
  const sql = `SELECT * FROM product_sake ps JOIN  product_format pf ON pf.format_id = ps.format_id`
  const [rs, fields] = await db.query(sql);
  res.json(rs);
});

module.exports = router;
