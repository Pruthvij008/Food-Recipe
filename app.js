// app.js
const path = require("path");
const express = require("express");
const morgan = require("morgan");
const viewRouter = require("./routes/viewRoutes");

const app = express();

// Middleware
app.use(morgan("dev"));
app.set("view engine", "pug");
app.use(express.static(`${__dirname}/public`));
app.set("views", path.join(__dirname, "view"));
// Route
app.use("/", viewRouter);

module.exports = app;
