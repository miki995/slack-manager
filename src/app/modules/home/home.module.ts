import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home.routing';

@NgModule({
  declarations: [ HomeComponent ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    HomeRoutingModule
  ],
  providers: [
  ]
})
export class HomeModule {
}
