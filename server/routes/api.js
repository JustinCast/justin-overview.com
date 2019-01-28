const express = require("express"),
  router = express.Router();
const RateCTRL = require("./RouteControler");
router.post("saveRate", RateCTRL.saveRate);
router.post("sendApprovalEmail", RateCTRL.sendApprovalEmail);

module.exports = router;