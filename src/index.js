const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { log } = require("../src/configs/log.class");
const Test = require("./database/models/test.model");

const corsOptions = {
  origin: "*",
};

const app = express();

app.use(express.json());
app.use(cors(corsOptions));
dotenv.config();

require("../src/database/connection");
app.get("/", (req, res) => {
  try {
    res.status(200).send({ message: "ok" });
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

app.all("*", (req, res) => {
  res.status(404).send({ error: "unknown path for services." });
});

app.listen(process.env.HTTP_PORT, () => {
  log.info(`Listening on port ${process.env.HTTP_PORT}`);
});
