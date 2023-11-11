const express = require("express");
const authRoute = require("./auth.route");
const employeeRoute = require("./employee.route");
const router = express.Router();

router.use("/auth", authRoute);
router.use("/employee", employeeRoute);

module.exports = router;
