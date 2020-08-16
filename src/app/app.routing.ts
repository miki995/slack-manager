import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/components/home/home.component';
import { DashboardComponent } from './modules/dashboard/components/dashboard/dashboard.component';

const routes: Route[] = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: '**', component: HomeComponent
  }
];

export const AppRoutingModule = RouterModule.forRoot(routes, { useHash: true });
