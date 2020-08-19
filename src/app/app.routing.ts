import { Route, RouterModule } from '@angular/router';
import { HomeGuard } from './guards/home.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    canActivate: [ HomeGuard ],
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'dashboard',
    canActivate: [ AuthGuard ],
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: '**', redirectTo: '/'
  }
];

export const AppRoutingModule = RouterModule.forRoot(routes, { useHash: false });
