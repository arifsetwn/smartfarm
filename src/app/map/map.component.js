"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var MapComponent = (function () {
    function MapComponent() {
        this.zoom = 15;
        // initial center position for the map
        this.lat = -7.771387;
        this.lng = 110.377951;
        this.markers = [
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
                lat: -7.772628,
                lng: 110.376550,
                label: 'C',
                draggable: true
            }
        ];
    }
    MapComponent.prototype.clickedMarker = function (label, index) {
        console.log("clicked the marker: " + (label || index));
    };
    MapComponent.prototype.markerDragEnd = function (m, $event) {
        console.log('dragEnd', m, $event);
    };
    MapComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'map-page',
            styles: ["\n  .sebm-google-map-container {\n  height: 300px;\n}"],
            templateUrl: 'map.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], MapComponent);
    return MapComponent;
}());
exports.MapComponent = MapComponent;
//# sourceMappingURL=map.component.js.map