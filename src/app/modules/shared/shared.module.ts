import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService } from '../../services/http.service';
import { AuthService } from '../../services/auth.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    HttpService,
    AuthService
  ]
})
export class SharedModule {
}
