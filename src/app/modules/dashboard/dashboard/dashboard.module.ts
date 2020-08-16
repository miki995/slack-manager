import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { FilesService } from '../../../services/files.service';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    FilesService,
  ]
})
export class DashboardModule {
}
