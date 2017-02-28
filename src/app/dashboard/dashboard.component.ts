import { Component } from '@angular/core';

@Component ({ 
  moduleId: module.id,
  selector :'dashboard-page',
  templateUrl :'dashboard.component.html'
})

export class DashboardComponent{
  title:string = "Dashboard";
}