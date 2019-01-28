var express = require("express"),
  fs = require("fs"),
  router = express.Router();
router.get("/cv", function(req, res) {
  var filePath = "/cv.pdf";

  fs.readFile(__dirname + filePath, function(err, data) {
    if(err) console.log(err);
    res.contentType("application/pdf;base64,");
    res.send(data);
  });
});



module.exports = router;