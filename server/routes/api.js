const express = require("express"),
  router = express.Router();
const RateCTRL = require("./RateController");
router.get("/getReviews", RateCTRL.getReviews);
router.post("/saveReview", RateCTRL.saveReview);
router.post("/sendApprovalEmail", RateCTRL.sendApprovalEmail);
router.put("/updateReview/:rate_id", RateCTRL.updateReview);

module.exports = router;