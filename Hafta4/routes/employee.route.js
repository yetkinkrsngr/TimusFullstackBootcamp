const express = require("express");
const controller = require("../controller");
const router = express.Router({ mergeParams: true });

router.route("/person").post(controller.employeeController.person);
module.exports = router;
