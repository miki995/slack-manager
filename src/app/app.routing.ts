import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/components/home/home.component';
import { DashboardComponent } from './modules/dashboard/components/dashboard/dashboard.component';
import { HomeGuard } from './guards/home.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Route[] = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [ AuthGuard ],
  },
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    canActivate: [ HomeGuard ],
  },
  {
    path: '**', component: HomeComponent
  }
];

export const AppRoutingModule = RouterModule.forRoot(routes, { useHash: true });
