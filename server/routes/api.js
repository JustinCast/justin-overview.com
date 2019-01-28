const express = require("express"),
  router = express.Router();
const RateCTRL = require("./RateController");
router.post("saveRate", RateCTRL.saveRate);
router.post("sendApprovalEmail", RateCTRL.sendApprovalEmail);
router.put("updateRate/:rate_id", RateCTRL.updatedRate);

module.exports = router;