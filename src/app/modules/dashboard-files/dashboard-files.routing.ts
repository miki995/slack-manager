import { Route, RouterModule } from '@angular/router';
import { DashboardFilesComponent } from './components/dashboard-files/dashboard-files.component';

const routes: Route[] = [
  {
    path: '',
    component: DashboardFilesComponent
  },
];

export const DashboardFilesRoutingModule = RouterModule.forChild(routes);
