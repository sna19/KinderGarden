import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../../service/configuration.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
  providers: [ConfigurationService]	
})
export class SettingsComponent implements OnInit {

  constructor(private configurationService: ConfigurationService) { }

  ngOnInit() {
  	this.configurationService.load();
  }

  onNotificationTimeChanged($event) {
  	console.log("notification time object", $event);
  	this.configurationService.updateNotificationTime($event.target.value);
  }

}
