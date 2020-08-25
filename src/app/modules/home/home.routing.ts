import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
];

export const HomeRoutingModule = RouterModule.forChild(routes);
