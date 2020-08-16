import { Component, OnInit } from '@angular/core';
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
export class AppComponent implements OnInit {

  constructor(
    private readonly store: Store<IAppState>,
    private readonly location: Location
  ) {
  }

  ngOnInit(): void {
    this.handleCode();

    /* const { code, state } = parseQuery(this.location.path());

     if (!!localStorage.getItem('slack-cleaner-token') && localStorage.getItem('slack-cleaner-token') !== undefined) {
       this.filesService.getFiles().subscribe(res2 => {
       });
     }

     if (code) {

       this.authService.exchangeCodeForToken(code).subscribe(i => {
         if (!i.ok) {
           this.router.navigateByUrl('/').then(res => {
           });
           return;
         }

         localStorage.setItem('slack-cleaner-token', i.access_token);
         this.httpService.setToken(i.authed_user.access_token);
         this.filesService.getFiles().subscribe(res2 => {
           this.files = res2.files;
         });
       });
     }*/
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
}

