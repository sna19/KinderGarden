import { Component, OnInit, Input } from '@angular/core';
import { MdDialogRef, MdDialog } from '@angular/material';

import { ConfigurationService } from '../../service/configuration.service';

import { ChildPropertiesComponent } from '../child-properties/child-properties.component';

import { ChildrenService } from '../../service/children.service';

import { Child } from   '../../model/child'
import { ChildAttendance } from   '../../model/childAttendance'
import { ChildrenAttendance } from  '../../model/childrenAttendance'

import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'children-list',
  templateUrl: './children-list.component.html',
  styleUrls: ['./children-list.component.css'],
  providers: [ChildrenService, ConfigurationService]
})

export class ChildrenListComponent implements OnInit {
  @Input() type: string;

  public childrenData: Array<ChildAttendance> = [];

  constructor(private configurationService: ConfigurationService, private childrenService: ChildrenService, public dialog: MdDialog) { }

  ngOnInit () {
    this.keepUpdated();
  }

  load() {

    if(this.type == "NotAttended")
      this.loadNotAttended();

    if(this.type == "Attended")
      this.loadAttended();
  }

  loadAttended() {
    

    this.childrenData = [];

    console.log("this.childrenData.length after", this.childrenData.length);    

    this.childrenService.getAttendedChildren();

    let subscription = this.childrenService.attendedChildren.subscribe(
          value => {
            this.childrenData.push(value);
            console.log ("push children");
          },
          error => console.log(error),
          () => console.log('finished')
    );
  }

  loadNotAttended() {
    

    this.childrenData = [];

    console.log("this.childrenData.length after", this.childrenData.length);    

    this.childrenService.getNotAttendedChildren();

    let subscription = this.childrenService.notAttendedChildren.subscribe(
          value => { 
            console.log ("subscribe&get value");
            this.childrenData.push(value)
          },
          error => console.log(error),
          () => console.log('finished')
    );
  }

  openDialog(selectedChild) {
  
    console.log('open dialog from children-list.component');
    
    let dialogRef: MdDialogRef<ChildPropertiesComponent>;
    dialogRef = this.dialog.open(ChildPropertiesComponent);
    dialogRef.componentInstance.selectedChildAtt = selectedChild;
    dialogRef.componentInstance.childrenList = this;

  }

  onAddClick() {
    console.log ('this', this);
    this.childrenData = [];
    this.childrenData.push(new ChildAttendance(true, "Nikita_Test"));
  }

  onRefreshAttended() {
    this.loadAttended();
  }

 onRefreshNotAttended() {
    this.loadNotAttended();
 }

  keepUpdated() {
    
    var me=this;
    setTimeout(function() {
      console.log("keepUpdated start");
      me.load();
      me.keepUpdated();
    }, 30000);
  }

}
