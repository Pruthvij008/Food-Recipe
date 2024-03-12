// const mongoose = require("mongoose");

const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const app = require("./app");

const portnumber = 3000;
const server = app.listen(portnumber, () => {
  console.log("app is running on the port 3000");
});
