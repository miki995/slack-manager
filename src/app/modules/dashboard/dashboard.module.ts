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

@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    SidebarRightComponent,
    SidebarStorageComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    StoreModule.forFeature('dashboard', reducers, { metaReducers }),
    EffectsModule.forFeature([
      DashboardEffects,
    ]),
    RouterModule,
  ],
  providers: [
  ]
})
export class DashboardModule {
}
