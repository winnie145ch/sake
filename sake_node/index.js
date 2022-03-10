require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

//********* router
// guide
app.use("/api/guide_q", require("./routes/guide_q"));
app.use("/api/guide_a", require("./routes/guide_a"));
// app.use("/api/product_guide", require("./routes/product_guide"));
// app.use("/api/format_guide", require("./routes/format_guide"));

// gift
app.use("/api/gift", require("./routes/gift"));
app.use("/api/gift_container", require("./routes/gift_container"));
// app.use("/api/product_gift", require("./routes/product_gift"));


// mark
app.use("/api/mark", require("./routes/mark"));

// res
app.use("/api/restaurant", require("./routes/restaurant"));

// *************notfound
app.use((req, res) => {
  res.status(404).send("<h1>404</h1>");
});

// **********final
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log("Server is running");
});
