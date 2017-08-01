import { Component, OnInit } from '@angular/core';

import { ConfigurationService } from '../../service/configuration.service';
import { ChildrenService } from '../../service/children.service';

import { ChildrenListComponent } from '../children-list/children-list.component';

import { ChildAttendance } from '../../model/childAttendance';

@Component({
  selector: 'app-child-properties',
  templateUrl: './child-properties.component.html',
  styleUrls: ['./child-properties.component.css'],
  providers: [ConfigurationService, ChildrenService]
})
export class ChildPropertiesComponent implements OnInit {

  selectedChildAtt : ChildAttendance;
  childrenList : ChildrenListComponent;

  constructor(public configurationService: ConfigurationService, private childrenService: ChildrenService) { }

  ngOnInit() {
  }

  onAttendingClick() {
  	this.selectedChildAtt.isAttended = true;
  	var childrenList = this.childrenList;
  	this.childrenService.setAttendedChild(this.selectedChildAtt.child.id, function() {
  		 debugger;
  		 childrenList.load();
  	});
  }

  onMissingClick() {
	
	this.selectedChildAtt.isAttended = false;
	var childrenList = this.childrenList;
	this.childrenService.setNotAttendedChild(this.selectedChildAtt.child.id, function() {
		debugger;
		childrenList.load();
	});
  }

  config = {};
}
