import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HomeGuard } from '../../guards/home.guard';

const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    canActivate: [ HomeGuard ],
  },
];

export const HomeRoutingModule = RouterModule.forChild(routes);
