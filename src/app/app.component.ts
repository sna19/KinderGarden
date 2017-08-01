import { Component, ViewChild  } from '@angular/core';
import { MdDialogRef, MdDialog } from '@angular/material';

import { ChildrenListComponent } from './components/children-list/children-list.component';
import { SettingsComponent } from './components/settings/settings.component';

import { ConfigurationService } from './service/configuration.service';
import { ChildrenService } from './service/children.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ChildrenListComponent, ConfigurationService, ChildrenService]
})
export class AppComponent {

  @ViewChild('notAttended') notAttended: ChildrenListComponent
  @ViewChild('attended') attended: ChildrenListComponent

  constructor(public dialog: MdDialog, public childrenList: ChildrenListComponent, public configurationService: ConfigurationService) { 
  }

  ngOnInit() {

  }

  onSettingsMenuClick() {
    let dialogRef: MdDialogRef<SettingsComponent>;
    dialogRef = this.dialog.open(SettingsComponent);
  }

  onTabClicked($event) {
    this.notAttended.load();
    this.attended.load();
  }

};
