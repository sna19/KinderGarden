import { Injectable } from '@angular/core';
import { Child } from 	'./../model/child'
import { ChildAttendance } from 	'./../model/childAttendance'
import { ChildrenAttendance } from 	'./../model/childrenAttendance'
import { CHILDREN_ATTENDANCE } from './../mock/mock-children-scetches'

import {Observable} from 'rxjs/Observable';

import { Http } from '@angular/http';

@Injectable()
export class ChildrenService {

  public attendedChildren: 		Observable<ChildAttendance>;
  public notAttendedChildren: 	Observable<ChildAttendance>;

  constructor(private http: Http) {
  }

  ngOnInit(): void {
 	
  }

  getAttendedChildren() {
  	
      this.attendedChildren = new Observable(observer => {
	    this.http.get("/getAttended").subscribe(data => {
			var dataJson = JSON.parse(data['_body']);
			for (var i=0;i<dataJson.length;i++)
				observer.next(dataJson[i]);
			observer.complete();
		});
      });
  }


  getNotAttendedChildren() {
    this.notAttendedChildren = new Observable(observer => {

	    this.http.get("/getNotAttended").subscribe(data => {
			var dataJson = JSON.parse(data['_body']);
			for (var i=0;i<dataJson.length;i++)
				observer.next(dataJson[i]);
			observer.complete();
		});
      });
  }

  setAttendedChild(childId, callback) {
  	 this.http.get("/setAttendance/"+childId+"/true").subscribe(result => {
	  	 if (callback)
	  	 		callback();
	 });
  }

  setNotAttendedChild(childId, callback) {
  	 this.http.get("/setAttendance/"+childId+"/false").subscribe(result => {
  	 	if (callback)
  	 		callback();
	 });
  }

  getAll() : ChildAttendance[] {

	let all : ChildAttendance[] = [];

	for (let childAtt of CHILDREN_ATTENDANCE.children) {
		
		all.push (childAtt);
	}

  	return all;
  };

  getAttended(ref: ChildAttendance[])  {

	this.http.get("/getAttended").subscribe(data => {
		 var dataJson = JSON.parse(data['_body']);
		 console.log ("dataJson", dataJson);
		 for (var i=0;i<dataJson.length;i++) {
			ref.push(dataJson[i]);
		}

		console.log(ref);
	});
 }

  getNotAttended() : ChildAttendance[] {
  	  	let attended : ChildAttendance[] = [];

	for (let childAtt of CHILDREN_ATTENDANCE.children) {
		if (childAtt.isAttended==false)
			attended.push (childAtt);
	}

  	return attended;
  }
}
