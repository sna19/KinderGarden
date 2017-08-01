var util = require("util");


var ConfigurationManager = function() {};


var NOTIFICATION_TIME = "16:56";


ConfigurationManager.prototype.getNotificationInterval = function () {

}

ConfigurationManager.prototype.getNotificationTime = function () {
	var timeArr = NOTIFICATION_TIME.split(':');

	var notificationDt = new Date();
	notificationDt.setHours(parseInt(timeArr[0]));
	notificationDt.setMinutes(parseInt(timeArr[1]));
	notificationDt.setSeconds(0);
	notificationDt.setMilliseconds(0);
	return notificationDt;
}

ConfigurationManager.prototype.setNotificationTime = function (newTimeStr) {

	NOTIFICATION_TIME = newTimeStr;
}



module.exports = new ConfigurationManager();
