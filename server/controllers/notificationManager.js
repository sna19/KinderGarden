

var configurationManager 	= require('./configurationManager');
var attendanceManager		= require('./attendanceManager');
var message = "זו הודעה מגן ורד. לפי הנתונים שלנו הילד טרם הגיע לגן. נודע לכם אם תעדכנו אותנו. ";

var isSent = false;

const NOTIFICATION_CHECK_PERIOD_MS = 1*1000;

var NotificationManager = function() {};

NotificationManager.prototype.start = function () {
	console.log ("Starting Notification Manager...");
	setInterval(NotificationManager.prototype.check, NOTIFICATION_CHECK_PERIOD_MS);
}

NotificationManager.prototype.check = function () {
	
	if (isSent == true) 
		return;
	
	var notificationDt = configurationManager.getNotificationTime();
	
	var currentDt = new Date();
	currentDt.setSeconds(0)
	currentDt.setMilliseconds(0);
	
	NotificationManager.prototype.log (notificationDt, currentDt);

	if (notificationDt.getTime() === currentDt.getTime()) {
		
		missedAttendances = attendanceManager.getAllMissed();
		NotificationManager.prototype.sendToAttendances (missedAttendances);
		//NotificationManager.prototype.sendMock (missedAttendances);
		isSent = true;
		console.log ("NOTIFY !!!");
	}
}

NotificationManager.prototype.sendMock = function (attendances) {
	for (var i=0;i<attendances.length;i++) {
		var att = attendances[i];
		if (att.child.phone!=null && typeof att.child.phone != 'undefined')
			console.log ('MOCK send to ID=', att.child.id, "Phone: ", att.child.phone);
	}
}

NotificationManager.prototype.sendToAttendances = function (attendances) {
	for (var i=0;i<attendances.length;i++) {
		var att = attendances[i];
		if (att.child.phone!=null && typeof att.child.phone != 'undefined') {
			console.log ('REAL send to ID=', att.child.id, "Phone: ", att.child.phone);
			NotificationManager.prototype.send(att.child.phone);
		}
	}
}

NotificationManager.prototype.send = function (phoneNumber) {
	var accountSid = 'AC94e6e0972176d07f4e5024d4288231c1'; // Your Account SID from www.twilio.com/console
	var authToken = 'c9c2ec2874599ab7470b2821feb44013';   // Your Auth Token from www.twilio.com/console
					 
				 
	var twilio = require('twilio');
	var client = new twilio(accountSid, authToken);

	client.messages.create({ 
		to: phoneNumber, 
		from: "+972559882657", 
		body: message, 
	})
	.then((message) => console.log(message.sid));
}

NotificationManager.prototype.log = function (notificationDt, currentDt) {
	var notifHours =  (notificationDt.getHours()<10?"0"+notificationDt.getHours():notificationDt.getHours());
	var notifMinutes =  (notificationDt.getMinutes()<10?"0"+notificationDt.getMinutes():notificationDt.getMinutes());
	var currHours =  (currentDt.getHours()<10?"0"+currentDt.getHours():currentDt.getHours());
	var currMinutes =  (currentDt.getMinutes()<10?"0"+currentDt.getMinutes():currentDt.getMinutes());
	console.log ('check notification target='+notifHours +':'+notifMinutes+
		' ??? current='+currHours+':'+currMinutes)
}

module.exports = new NotificationManager();
