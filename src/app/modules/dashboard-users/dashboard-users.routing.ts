import { Route, RouterModule } from '@angular/router';
import { DashboardUsersComponent } from './components/dashboard-users/dashboard-users.component';

const routes: Route[] = [
  {
    path: '',
    component: DashboardUsersComponent
  },
];

export const DashboardUsersRoutingModule = RouterModule.forChild(routes);
