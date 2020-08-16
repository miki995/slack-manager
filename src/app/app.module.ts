import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './modules/shared/shared.module';
import { AppRoutingModule } from './app.routing';
import { HomeModule } from './modules/home/home.module';
import { DashboardModule } from './modules/dashboard/dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
