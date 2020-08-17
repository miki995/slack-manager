import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardFilesComponent } from './components/dashboard-files/dashboard-files.component';
import { DashboardFilesRoutingModule } from './dashboard-files.routing';

@NgModule({
  declarations: [ DashboardFilesComponent ],
  imports: [
    CommonModule,
    DashboardFilesRoutingModule
  ]
})
export class DashboardFilesModule {
}
