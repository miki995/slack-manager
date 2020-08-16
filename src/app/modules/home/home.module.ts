import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { AuthService } from '../../services/auth.service';

@NgModule({
  declarations: [ HomeComponent ],
  imports: [
    CommonModule
  ],
  providers: [
    AuthService
  ]
})
export class HomeModule {
}
