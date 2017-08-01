const 	express			 	= require('express')  
const 	app 				= express()
const 	path				= require("path");
var 	bodyParser 			= require('body-parser');	
var		attendanceManager 	= require('./controllers/attendanceManager')
var		childrenManager 	= require('./controllers/childrenManager')
var		notificationManager = require('./controllers/notificationManager')
var 	configurationManager= require('./controllers/configurationManager')

const port 		= 3000

app.get('/simpledeployment/assets/*', express.static('../src/assets'))

app.use('/simpledeployment', express.static('../dist'))

app.get('/getChildren', function (req, res) {
	var children;
	children=childrenManager.getChildren();
	res.send (children);
});

app.get('/getAttended', function (req, res) {
	console.log ("URL: /getAttended started");
	var children;
	children=attendanceManager.getAllAttended();
	res.send (children);
});

app.get('/getNotAttended', function (req, res) {
	var children;
	children=attendanceManager.getAllMissed();
	res.send (children);
});

app.get('/updateNotificationTime/:newTime', function (req, res) {
	var newTime = req.params.newTime;
	children=configurationManager.setNotificationTime(newTime);
	res.send (200);
	res.end();
});

app.get('/setAttendance/:childId/:isAttended', function (req, res) {
	var childId = req.params.childId;
	var isAttended = req.params.isAttended;
	if (isAttended=="true")
		attendanceManager.setAttended(childId);
	if (isAttended=="false")
		attendanceManager.setMissed(childId);

	res.send(200);
	res.end();
});

app.get('/setMissed/:id', function (req, res) {
	childrenManager.addMissing(req.params.id);
	res.send (200);
	res.end();
});

app.listen(port, (err) => {  
  if (err) {
    return console.log	('something bad happened', err) 
   }

console.log(`server is listening on ${port}`)
})


childrenManager.load(function () {
	attendanceManager.load( childrenManager.getAllChildren());
	notificationManager.start();	
});
