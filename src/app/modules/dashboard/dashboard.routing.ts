import { Route, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Route[] = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../dashboard-home/dashboard-home.module').then(m => m.DashboardHomeModule)
      },
      {
        path: 'files',
        loadChildren: () => import('../dashboard-files/dashboard-files.module').then(m => m.DashboardFilesModule)
      }
    ]
  },
];

export const DashboardRoutingModule = RouterModule.forChild(routes);
