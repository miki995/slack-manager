import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardUsersComponent } from './components/dashboard-users/dashboard-users.component';
import { DashboardUsersRoutingModule } from './dashboard-users.routing';
import { UsersListComponent } from './components/users-list/users-list.component';
import { ContentLoaderModule } from '@ngneat/content-loader';

@NgModule({
  declarations: [ DashboardUsersComponent, UsersListComponent ],
    imports: [
        CommonModule,
        DashboardUsersRoutingModule,
        ContentLoaderModule
    ]
})
export class DashboardUsersModule {
}
