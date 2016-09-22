module.exports = function(expressApp) {

	expressApp.get('/api/tables', function(req, res) {
		res.send("You requested " + req);
	});

	expressApp.get('/api/waitlist', function(req, res) {
		res.send("You requested: " + req);
	});

	expressApp.post('/api/reservation/new', function(req, res) {
		console.log(
			req.body.name + " " 
			+ req.body.email + " " 
			+ req.body.partySize + " "
			+ req.body.phoneNumber
		);
		//if currentReservations > numberOfTables {
			//add new reservation object to waitlist;
		//}
		//else {
			//add new reservation object to reservation list;
		//}


		//handle data, add it to either reservations, or waitlist.

		res.send('You made a reservation: ' + req.body);
	});
}