const path = require('path');
const express = require('express');
const app = express();
const api = require('./server/api');


// Serve static files
app.use(express.static(__dirname + '/dist/JustinOverview'));

app.use("/download", api);
// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/JustinOverview/index.html'));
});

// default Heroku port
app.listen(process.env.PORT || 5000);