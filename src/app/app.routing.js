"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var map_component_1 = require('./map/map.component');
var sensor_component_1 = require('./sensor/sensor.component');
var appRoutes = [
    { path: "", component: dashboard_component_1.DashboardComponent },
    { path: "sensor", component: sensor_component_1.SensorComponent },
    { path: "map", component: map_component_1.MapComponent }
];
exports.appRouting = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map