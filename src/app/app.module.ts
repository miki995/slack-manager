import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing';
import { HomeModule } from './modules/home/home.module';
import { EffectsModule } from '@ngrx/effects';
import { LayoutEffects } from './store/layout/layout.effects';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from './store';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { DashboardModule } from './modules/dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 300 }) : [],
    EffectsModule.forRoot([
      LayoutEffects,
    ]),
    HomeModule,
    DashboardModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
