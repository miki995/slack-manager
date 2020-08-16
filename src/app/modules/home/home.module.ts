import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { AuthService } from '../../services/auth.service';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ HomeComponent ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  providers: [
    AuthService
  ]
})
export class HomeModule {
}
