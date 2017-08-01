import { Child } from './child'

export class ChildAttendance {
  child: Child; 
  isAttended: boolean;
  checkIn: string;
  checkOut: string;

  constructor(isAttended: boolean, name: string) {
  	let child = new Child(name);
  	this.child = child;
  	this.isAttended = isAttended;
  }
};