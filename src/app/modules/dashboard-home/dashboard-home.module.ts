import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardHomeComponent } from './components/dashboard-home/dashboard-home.component';
import { DashboardHomeRoutingModule } from './dashboard-home.routing';
import { HomeChartComponent } from './components/home-chart/home-chart.component';
import { SharedModule } from '../shared/shared.module';
import { RecentFilesComponent } from './components/recent-files/recent-files.component';
import { UpgradeComponent } from './components/upgrade/upgrade.component';
import { StatsComponent } from './components/stats/stats.component';
import { QuickAccessComponent } from './components/quick-access/quick-access.component';
import { ClipboardModule } from 'ngx-clipboard';

@NgModule({
  declarations: [ DashboardHomeComponent, HomeChartComponent, RecentFilesComponent, UpgradeComponent, StatsComponent, QuickAccessComponent ],
  imports: [
    CommonModule,
    DashboardHomeRoutingModule,
    SharedModule,
    ClipboardModule
  ]
})
export class DashboardHomeModule {
}
