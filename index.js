require('dotenv').config();

var express = require('express');
var bodyParser = require('body-parser');
var HTMLing = require('htmling');

var app = express();

app.use(express.static('public'));
app.use("/reveal", express.static(__dirname + '/node_modules/reveal.js'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('html', HTMLing.express(__dirname + '/views/'));
app.set('view engine', 'html');

app.get('/', function(req, res) {
  res.render('index');
});

app.listen(process.env.PORT || 3000);

