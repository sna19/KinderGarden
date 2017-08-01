var childrenMgr 	= require('./childrenManager');
var attendanceModel = require('../model/attendanceModel');

var attendances = [];
var AttendanceManager = function () {};

AttendanceManager.prototype.test = function (childId) {
}

AttendanceManager.prototype.load = function (children) {
	for (var i=0;i<children.length;i++) {
		attendances.push(attendanceModel.createAttendance(children[i]));
	}
}

AttendanceManager.prototype.getAllMissed = function () {
	var missedAtt = [];
	var att;
	for (var i=0;i<attendances.length;i++) {
		att = attendances[i];
		if (att.isAttended==false)
			missedAtt.push(att);
	}
	return missedAtt;
}

AttendanceManager.prototype.getAllAttended = function () {
	//console.log ("getAllAttended->all_data",attendances);

	var attended = [];
	var att;
	for (var i=0;i<attendances.length;i++) {
		att = attendances[i];
		if (att.isAttended==true)
			attended.push(att);
	}

	console.log ("getAllAttended->attended", attended);
	return attended;
}

AttendanceManager.prototype.setMissed = function (childId) {

	var attendance;
	attendance = AttendanceManager.prototype.getOrCreateAttendance(childId);
	attendance.isAttended = false;
}

AttendanceManager.prototype.setAttended = function (childId) {

	var attendance;
	attendance = AttendanceManager.prototype.getOrCreateAttendance(childId);
	attendance.isAttended = true;
}

AttendanceManager.prototype.getOrCreateAttendance = function (childId) {

	var attendance;
	var attendedChild = childrenMgr.getChild(childId);
	if (attendedChild) {
		attendance = AttendanceManager.prototype.getAttendance(childId);
		if (attendance==null)
			attendance = attendanceModel.createAttendance(attendedChild);
	}
	else {
		console.log ("WARN: The child "+childId+" was not found in getOrCreateAttendance")
	}

	return attendance;
}


AttendanceManager.prototype.getAttendance = function (childId) {
	for (var i=0;i<attendances.length;i++) {
		if (attendances[i].child.id == childId)
			return attendances[i];
	}
}



module.exports = new AttendanceManager();


/*
ChildrenManager.prototype.addMissed = function (childId) {

	fs.readFile(MISSED_JSON, 'utf8', function readFileCallback(err, data){
		
	    if (err){
	        console.log(err);
	        obj = {"table":[]};
	    } else
	    {
	    	obj = JSON.parse(data); //now it an object
	    }		

	    obj.table.push({"id": childId}); //add some data
	    json = JSON.stringify(obj); //convert it back to json
	    
	    fs.writeFile(MISSED_JSON, json, 'utf8', function () {

	    }); // write it back 
	});
}
*/

/*
ChildrenManager.prototype.addAttended = function (childId) {

	fs.readFile(MISSED_JSON, 'utf8', function readFileCallback(err, data){
		
	    if (err){
	        console.log(err);
	        obj = {"table":[]};
	    } else
	    {
	    	obj = JSON.parse(data); //now it an object
	    }		

	    obj.table.push({"id": childId}); //add some data
	    json = JSON.stringify(obj); //convert it back to json
	    
	    fs.writeFile(MISSED_JSON, json, 'utf8', function () {

	    }); // write it back 
	});
}
*/


/*


ChildrenManager.prototype.addMissing = function (childId) {

	fs.readFile(MISSED_JSON, 'utf8', function readFileCallback(err, data){
		
	    if (err){
	        console.log(err);
	        obj = {"table":[]};
	    } else
	    {
	    	obj = JSON.parse(data); //now it an object
	    }		

	    obj.table.push({"id": childId}); //add some data
	    json = JSON.stringify(obj); //convert it back to json
	    
	    fs.writeFile(MISSED_JSON, json, 'utf8', function () {

	    }); // write it back 
	});
}

*/