import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { parseQuery } from './helpers/query.helper';
import * as layoutActions from './store/layout/layout.actions';
import { Store } from '@ngrx/store';
import { IAppState } from './store';
import { NavigationEnd, Router } from '@angular/router';
import { config } from './config/config';

declare let gtag: any;

@Component({
  selector: 'sc-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {

  constructor(
    private readonly store: Store<IAppState>,
    private readonly location: Location,
    private readonly router: Router
  ) {
  }

  ngOnInit(): void {
    this.handleCode();
    this.trackGoogleAnalytics();
  }

  handleCode(): void {


    const { code, state } = parseQuery(this.location.path());

    if (!code) {
      return;
    }

    this.store.dispatch({
      type: layoutActions.LAYOUT_EXCHANGE_CODE_FOR_TOKEN,
      payload: code
    });
  }

  trackGoogleAnalytics(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        gtag('config', config.ga,
          {
            page: event.urlAfterRedirects
          }
        );
      }
    });
  }
}

