const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Succesfully connected to MongoDB"))
  .catch((err) => console.log("The following error occured \n", err));

const port = process.env.PORT || 4242;
const questionsRouter = require("./routes/questions");

app.use(express.json());

app.use("/api/", questionsRouter);

app.get("/", (req, res) => {
  res
    .status(200)
    .send("Hi there! Welcome to the Random Interview Questions API.");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
