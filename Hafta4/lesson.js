const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const routes = require("./routes/index");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = 8080;
app.get("/", (req, res) => {
  res.status(200).send("Working on 8080");
});

app.use("/api", routes);
dotenv.config();
app.listen(port, () => {
  console.log("listening on 8080");
});
