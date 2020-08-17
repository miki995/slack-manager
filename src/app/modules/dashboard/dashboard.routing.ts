import { Route, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from '../../guards/auth.guard';

const routes: Route[] = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [ AuthGuard ],
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
