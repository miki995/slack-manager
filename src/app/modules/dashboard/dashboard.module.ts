import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { metaReducers, reducers } from './store';
import { DashboardEffects } from './store/dashboard/dashboard.effects';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarRightComponent } from './components/sidebar-right/sidebar-right.component';
import { DashboardRoutingModule } from './dashboard.routing';
import { SidebarStorageComponent } from './components/sidebar-right/sidebar-storage/sidebar-storage.component';
import { GaugeModule } from 'angular-gauge';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { ContentLoaderModule } from '@ngneat/content-loader';
import { SidebarFileInfoComponent } from './components/sidebar-right/sidebar-file-info/sidebar-file-info.component';
import { ClipboardModule } from 'ngx-clipboard';

@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    SidebarRightComponent,
    SidebarStorageComponent,
    HeaderComponent,
    SidebarFileInfoComponent,
  ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        StoreModule.forFeature('dashboard', reducers, { metaReducers }),
        EffectsModule.forFeature([
            DashboardEffects,
        ]),
        RouterModule,
        GaugeModule.forRoot(),
        SharedModule,
        ContentLoaderModule,
        ClipboardModule
    ],
  providers: [
  ]
})
export class DashboardModule {
}
