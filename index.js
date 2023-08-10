const express = require("express");
const response = require("./response");
const app = express();
const port = 8484;

app.get("/faqs", (req, res) => {
  return res.status(200).send({
    status: "success",
    data: response,
  });
});

app.listen(port, () => {
  console.log(`app is listening at http://localhost:${port}`);
});
