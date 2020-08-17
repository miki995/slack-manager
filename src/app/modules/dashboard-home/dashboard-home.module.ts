import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardHomeComponent } from './components/dashboard-home/dashboard-home.component';
import { DashboardHomeRoutingModule } from './dashboard-home.routing';

@NgModule({
  declarations: [ DashboardHomeComponent ],
  imports: [
    CommonModule,
    DashboardHomeRoutingModule
  ]
})
export class DashboardHomeModule {
}
