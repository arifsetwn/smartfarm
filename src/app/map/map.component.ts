import { Component } from '@angular/core';

interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}

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
  title:string = "Map";
  zoom: number = 15;
  
    // initial center position for the map
  lat: number = -7.771387;
  lng: number = 110.377951;
   

   clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
   
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  markers: marker[] = [
      {
      lat: -7.769723,
      lng: 110.380987,
      label: 'A',
      draggable: true
    },
    { 
      lat: -7.767921,
      lng: 110.377068,
      label: 'B',
      draggable: false
    },
    { 
      lat:-7.772628,
      lng: 110.376550,
      label: 'C',
      draggable: true
    }
  ]
}