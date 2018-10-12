var express = require("express"),
  fs = require("fs"),
  router = express.Router();
router.get("/cv", function(req, res) {
  var filePath = "../src/assets/cv.pdf";

  fs.readFile(__dirname + filePath, function(err, data) {
    res.contentType("application/pdf");
    res.send(data);
  });
});


module.exports = router;