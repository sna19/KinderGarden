var	fs = require('fs');

const MISSED_JSON 	= 'data/missed.json';
const ALL_JSON 		= 'data/children.json';

var allChildren = [];

var ChildrenManager = function() {};

ChildrenManager.prototype.getAllChildren = function () {
	console.log ('getAllChildren', allChildren.length);
	return allChildren;
};

ChildrenManager.prototype.getChild = function (childId) {
	for (i=0;i<allChildren.length;i++)
		if (allChildren[i].id == childId)
			return allChildren[i];
}

ChildrenManager.prototype.load = function (callback) {
	console.log ('loading children');
	fs.readFile(ALL_JSON, 'utf8', function readFileCallback(err, data){
		
	    if (err){
	        console.log(err);
	        obj = {"children":[]};
	    } else
	    {
	    	obj = JSON.parse(data); //now it an object
	    }		

		allChildren = obj.children;
		console.log('number of children loaded: ', allChildren.length);

		if (callback) callback();
	});

}

module.exports = new ChildrenManager();