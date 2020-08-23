import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardFilesComponent } from './components/dashboard-files/dashboard-files.component';
import { DashboardFilesRoutingModule } from './dashboard-files.routing';
import { FoldersComponent } from './components/folders/folders.component';
import { FilesListComponent } from './components/files-list/files-list.component';
import { SharedModule } from '../shared/shared.module';
import { FilesCountComponent } from './components/files-count/files-count.component';
import { FilesSearchComponent } from './components/files-search/files-search.component';
import { FilesListInfoComponent } from './components/files-list-info/files-list-info.component';
import { FilesPaginationComponent } from './components/files-pagination/files-pagination.component';
import { FilesFiltersComponent } from './components/files-filters/files-filters.component';
import { ContentLoaderModule } from '@ngneat/content-loader';

@NgModule({
  declarations: [ DashboardFilesComponent, FoldersComponent, FilesListComponent, FilesCountComponent, FilesSearchComponent, FilesListInfoComponent, FilesPaginationComponent, FilesFiltersComponent ],
  imports: [
    CommonModule,
    DashboardFilesRoutingModule,
    SharedModule,
    ContentLoaderModule
  ]
})
export class DashboardFilesModule {
}
