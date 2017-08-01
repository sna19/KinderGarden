import 'hammerjs';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';
import {MdGridListModule, MdButtonModule, MdCheckboxModule, MdDialogModule, MdCardModule, MdTabsModule} from '@angular/material';

import { AppComponent } from './app.component';
import { ChildrenListComponent } from './components/children-list/children-list.component';
import { HttpModule } from '@angular/http';
import { ChildPropertiesComponent } from './components/child-properties/child-properties.component';
import { SettingsComponent } from './components/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildrenListComponent,
    ChildPropertiesComponent,
    SettingsComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,

    MdGridListModule, 
    MdButtonModule, 
    MdCheckboxModule, 
    MdDialogModule,
    MdCardModule,
    MdTabsModule,

    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent, ChildPropertiesComponent, SettingsComponent]
})
export class AppModule { }
  