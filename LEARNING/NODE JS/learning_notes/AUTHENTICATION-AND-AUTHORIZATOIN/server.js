require("dotenv").config();

const express = require("express");
const connection = require("./database/connection");
const authRoutes = require("./routes/router");
const homeRoutes = require("./routes/home_router");

const port = process.env.port || 5000;

const app = express();

connection();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/home", homeRoutes);

app.listen(port, () => {
  console.log("server is started");
});
