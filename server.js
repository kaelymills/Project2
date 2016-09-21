// Set Up ============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Configuration =====================================================
var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Separate Routers ==================================================
var htmlRouter = require("./app/routing/htmlroutes.js");
var apiRouter = require("./app/routing/apiroutes.js");

// Routes ============================================================
// app.use('./app/public/', htmlRouter);
// app.use('./app/data/', apiRouter);
app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, './app/public/home.html'));
});
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, './app/public/home.html'));
});
app.get('/reserve.html', function(req, res) {
	res.sendFile(path.join(__dirname, '/app/public/reserve.html'));
});
app.get('/tables.html', function(req, res) {
	res.sendFile(path.join(__dirname, '/app/public/table.html'));
});

// Listen (start app with node server.js) ============================
app.listen(PORT, function() {
	console.log('App listening on PORT ' + PORT);
});

