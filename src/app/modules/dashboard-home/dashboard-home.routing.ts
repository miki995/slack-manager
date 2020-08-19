import { Route, RouterModule } from '@angular/router';
import { DashboardHomeComponent } from './components/dashboard-home/dashboard-home.component';

const routes: Route[] = [
  {
    path: '',
    component: DashboardHomeComponent
  },
];

export const DashboardHomeRoutingModule = RouterModule.forChild(routes);
