// Set Up ============================================================
var express = require("express");
var bodyParser = require("body-parser");
//var path = require("path");

// Configuration =====================================================
var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Separate Routers ==================================================
var htmlRouter = require("./app/routing/htmlroutes.js");
htmlRouter(app);


var apiRouter = require("./app/routing/apiroutes.js");
apiRouter(app);
// Routes ============================================================
// app.use('./app/public/', htmlRouter);
// app.use('./app/data/', apiRouter);





// Listen (start app with node server.js) ============================
app.listen(PORT, function() {
	console.log('App listening on PORT ' + PORT);
});

