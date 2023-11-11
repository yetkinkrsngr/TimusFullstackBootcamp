const express = require("express");
const controller = require("../controller");
const router = express.Router({ mergeParams: true });

router.route("/login").post(controller.authControoler.login);
router.route("/refleshToken").post(controller.authControoler.token);
router.route("/logout").post(controller.authControoler.logout);
module.exports = router;
