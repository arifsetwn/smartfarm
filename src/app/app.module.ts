import { NgModule, ApplicationRef }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { appRouting } from './app.routing';
import { AppComponent }  from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MapComponent } from './map/map.component';
import { SensorComponent } from './sensor/sensor.component';

import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  imports:      [ 
    BrowserModule,
    appRouting,
    AgmCoreModule.forRoot({
      apiKey : 'AIzaSyCw3l8BoinEUI1rtpQNajqZvEn9v_Trqao'
    }) 
    ],


  declarations: [ 
    AppComponent,
    DashboardComponent,
    MapComponent,
    SensorComponent

  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
