var path = require('path');

//takes an express application as a parameter
//we export the function so that the main server file can use it.
module.exports = function(expressApp) {

	//add routes like normal
	expressApp.get('/', function(req, res) {
		console.log(__dirname);

		//__dirname refers to the directory of this file
		//which is: ... Project2/app/routing
		res.sendFile(path.join(__dirname, '../public/home.html'));
	});

	expressApp.get('/reserve', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/reserve.html'));
	});
	expressApp.get('/tables', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/tables.html'));
	});
}