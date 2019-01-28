const path = require('path');
const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const api = require('./server/api');


/**
 * Server config
 */

function config() {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials"
    );
    res.header("Access-Control-Allow-Credentials", "true");
    next();
  });
}
// MONGO DB URI
// mongodb://heroku_v0xw7jkl:q3mrb4h7n24gl8c6jl3shktk8v@ds113815.mlab.com:13815/heroku_v0xw7jkl

function routerConfig() {
  // Serve static files
  app.use(express.static(__dirname + '/dist/JustinOverview'));
  
  app.use("/download", api);
  // Send all requests to index.html
  app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/JustinOverview/index.html'));
  });
}

config();
routerConfig();
// default Heroku port
app.listen(process.env.PORT || 5000);