var express = require("express");
var path = require("path");
var logger = require('morgan');
var bodyparser = require("body-parser");

var app = express();

app.use(logger("dev"));
app.use(bodyparser.json());

require("./routes/books.js")(app);

var server = app.listen(3000, "127.0.0.1", function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log("App listening at http://$s:$s", host, port);
})