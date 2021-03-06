const router = require("express").Router();
const db = require("../modules/connect-db");

// Get kind of gift: http://localhost:3500/api/product_guide
// 指南推薦酒
router.get("/", async (req, res) => {
  if (req.query.ans) {
    const taste = req.query.pro_taste ? req.query.pro_taste : "";
    const temp = req.query.pro_temp ? req.query.pro_temp : "";
    let priceLow = req.query.pro_price ? req.query.pro_price : "";
    let priceHigh = req.query.pro_price ? req.query.pro_price : "";

    let where = " WHERE 1";

    // 搜尋關鍵字串接
    if (taste) where += ` AND pf.pro_taste LIKE CONCAT('%',${taste},'%')`;
    if (temp) where += ` AND pf.pro_temp LIKE CONCAT('%',${temp},'%')`;
    if (priceLow || priceHigh)
      where += ` AND pf.pro_price BETWEEN ${priceLow} AND ${priceHigh}`;

    const sql = `SELECT * FROM product_sake ps JOIN  product_format pf ON pf.format_id = ps.format_id ${where} LIMIT 3`;
    const [rs, fields] = await db.query(sql);
    res.json(rs);
  }
  const sql = `SELECT * FROM product_sake ps JOIN  product_format pf ON pf.format_id = ps.format_id LIMIT 3`;
  const [rs, fields] = await db.query(sql);
  res.json(rs);
});

module.exports = router;
