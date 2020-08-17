import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: '**', redirectTo: '/'
  }
];

export const AppRoutingModule = RouterModule.forRoot(routes, { useHash: false });
