import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { AuthService } from '../../services/auth.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ HomeComponent ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    AuthService
  ]
})
export class HomeModule {
}
