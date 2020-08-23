import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { parseQuery } from './helpers/query.helper';
import * as layoutActions from './store/layout/layout.actions';
import { Store } from '@ngrx/store';
import { IAppState } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit, AfterViewInit {

  constructor(
    private readonly store: Store<IAppState>,
    private readonly location: Location
  ) {
  }

  ngOnInit(): void {
    this.handleCode();
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

  ngAfterViewInit(): void {
    jQuery('[data-toggle="tooltip"]').tooltip({
      container: 'body'
    });
  }
}

