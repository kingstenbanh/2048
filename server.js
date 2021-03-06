var express = require('express')
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 3030;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'app')));

app.listen(port, function() {
  console.log('Express server listening on port', port);
})
