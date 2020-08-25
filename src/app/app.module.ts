import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { EffectsModule } from '@ngrx/effects';
import { LayoutEffects } from './store/layout/layout.effects';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from './store';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SharedModule } from './modules/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 300 }) : [],
    EffectsModule.forRoot([
      LayoutEffects,
    ]),
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
