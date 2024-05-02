// index.js
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const usersRoutes = require("./routes/usersRoutes");
// const maintenanceTask = require("./cron/maintenanceTask");no

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.use("/users", usersRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
