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

const disneyCharacters = require("./routes/disneyCharacters");
app.use("/disneyCharacters", disneyCharacters);

app.listen(3000, () => console.log("Server Started"));
