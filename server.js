require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("We are connected to our Database"));

app.use(express.json());

const mickeymouseRouter = require("./routes/mickeymouses");
app.use("/mickeymouse", mickeymouseRouter);

app.listen(3000, () => console.log("Our server has started"));
