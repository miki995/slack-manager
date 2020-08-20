import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardHomeComponent } from './components/dashboard-home/dashboard-home.component';
import { DashboardHomeRoutingModule } from './dashboard-home.routing';
import { HomeChartComponent } from './components/home-chart/home-chart.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ DashboardHomeComponent, HomeChartComponent ],
  imports: [
    CommonModule,
    DashboardHomeRoutingModule,
    SharedModule
  ]
})
export class DashboardHomeModule {
}
