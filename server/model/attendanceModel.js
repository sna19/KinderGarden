
var AttendanceModel = function () {}

AttendanceModel.prototype.createAttendance = function (child) {

	var newAtt = {
	  child: child,
	  isAttended: false,
	  checkIn: null,
	  checkOut: null	
	};

	return newAtt;
}


module.exports = new AttendanceModel();