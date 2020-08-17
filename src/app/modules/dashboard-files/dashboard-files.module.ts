import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardFilesComponent } from './components/dashboard-files/dashboard-files.component';
import { DashboardFilesRoutingModule } from './dashboard-files.routing';
import { FoldersComponent } from './components/folders/folders.component';

@NgModule({
  declarations: [ DashboardFilesComponent, FoldersComponent ],
  imports: [
    CommonModule,
    DashboardFilesRoutingModule
  ]
})
export class DashboardFilesModule {
}
