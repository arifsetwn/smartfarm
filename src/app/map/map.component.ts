import { Component } from '@angular/core';

@Component ({
  moduleId: module.id,
  selector :'map-page',
  styles : [`
  .sebm-google-map-container {
  height: 300px;
}`],
    templateUrl :'map.component.html'
})

export class MapComponent{

  zoom: number = 15;
title: string = 'Map Sensor ';
lat: number = -7.769324;
lng: number = 110.377814;

, 
}