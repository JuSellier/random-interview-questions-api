const express = require("express");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 4242;
// const questionsRouter = require("./routes/questions");

app.use(express.json());

// app.use("/api/", questionsRouter);

app.get("/", (req, res) => {
  res
    .status(200)
    .send("Hi there! Welcome to the Random Interview Questions API.");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
