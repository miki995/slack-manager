import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { metaReducers, reducers } from './store';
import { DashboardEffects } from './store/dashboard/dashboard.effects';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { FilesService } from '../../services/files.service';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent
  ],
    imports: [
        CommonModule,
        SharedModule,
        StoreModule.forFeature('dashboard', reducers, { metaReducers }),
        EffectsModule.forFeature([
            DashboardEffects,
        ]),
        RouterModule,
    ],
  providers: [
    FilesService,
  ]
})
export class DashboardModule {
}
