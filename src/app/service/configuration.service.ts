import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

@Injectable()
export class ConfigurationService {

constructor(private http: Http) {
}


public notificationTime: String = "09:00";

getImagesSize() : string {

	//imagesSize: 'assets/63x63';
	//let imagesSize: string = 'assets/300x300-scetches';
	//let imagesSize: string = 'assets/150x150-scetches';
	let imagesSize: string = 'assets/100x100-scetches';
	return imagesSize;
}

load () {
	this.http.get("/getNotificationTime").subscribe(data => {
			console.log(data);	
			//this.notificationTime = data;
	});			
}

updateNotificationTime(newTime) {
	this.http.get("/updateNotificationTime/"+newTime).subscribe(data => {
			console.log("DONE");
	});
}  


}
