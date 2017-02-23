import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MapComponent } from './map/map.component';
import { SensorComponent } from './sensor/sensor.component';

const appRoutes:Routes = [
{ path : "", component : DashboardComponent },
{path : "sensor", component : SensorComponent },
{path : "map", component : MapComponent }


];

export const appRouting:ModuleWithProviders = RouterModule.forRoot(appRoutes);