import { Child } from './../model/child'
import { ChildAttendance } from './../model/childAttendance'
import { ChildrenAttendance } from './../model/childrenAttendance'

export const CHILDREN_ATTENDANCE: ChildrenAttendance = {
  attendanceDate : '7/2/2017',
  children : [
    {
      child: {id: 1, name: "אבי כוהן", image: "child1.png"},
      isAttended: false,
      checkIn: null,
      checkOut: null
    },
    {
      child: {id: 2, name: "אבי כוהן", image: "child2.png"},
      isAttended: true,
      checkIn: null,
      checkOut: null
    }
  ]  
};

/*
export const CHILDREN: Child[] = [


  { id: 1, name: "אבי כוהן", image: "child1.png"},
  { id: 2, name: "אבי כוהן", image: "child2.png"},
  { id: 3, name: "אבי כוהן", image: "child3.png"},
  { id: 4, name: "אבי כוהן", image: "child1.png"},
  { id: 5, name: "אבי כוהן", image: "child2.png"},
  { id: 6, name: "אבי כוהן", image: "child3.png"},
  { id: 7, name: "אבי כוהן", image: "child1.png"},
  { id: 8, name: "אבי כוהן", image: "child2.png"},
  { id: 9, name: "אבי כוהן", image: "child3.png"},
  { id: 10, name: "אבי כוהן", image: "child1.png"},
  { id: 11, name: "אבי כוהן", image: "child2.png"},
  { id: 12, name: "אבי כוהן", image: "child3.png"},
  { id: 13, name: "אבי כוהן", image: "child1.png"}

];

*/