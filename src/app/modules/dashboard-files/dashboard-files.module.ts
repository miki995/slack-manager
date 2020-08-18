import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardFilesComponent } from './components/dashboard-files/dashboard-files.component';
import { DashboardFilesRoutingModule } from './dashboard-files.routing';
import { FoldersComponent } from './components/folders/folders.component';
import { FilesListComponent } from './components/files-list/files-list.component';
import { SharedModule } from '../shared/shared.module';
import { FilesCountComponent } from './components/files-count/files-count.component';
import { FilesSearchComponent } from './components/files-search/files-search.component';

@NgModule({
  declarations: [ DashboardFilesComponent, FoldersComponent, FilesListComponent, FilesCountComponent, FilesSearchComponent ],
    imports: [
        CommonModule,
        DashboardFilesRoutingModule,
        SharedModule
    ]
})
export class DashboardFilesModule {
}
