const express = require("express");

const PORT = 3000;

const app = express();

app.use(express.json());



app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
const listData = require("../server/data/list");

app.get("/list", (req, res, next) => {
  res.status(200).send(listData.getList);
});
