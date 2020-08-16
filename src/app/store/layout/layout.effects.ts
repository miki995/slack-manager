import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as layoutActions from './layout.actions';
import { of } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { SLACK_CLEANER_TOKEN } from '../../helpers/token.helper';

@Injectable()
export class LayoutEffects {

  @Effect()
  exchangeCode$ = this.actions$
    .pipe(
      ofType(layoutActions.LAYOUT_EXCHANGE_CODE_FOR_TOKEN),
      switchMap((action: layoutActions.LayoutExchangeCodeForToken) => {

        return this.authService.exchangeCodeForToken(action.payload)
          .pipe(
            catchError((error) => of(new layoutActions.LayoutExchangeCodeForTokenFail(error))),
            map((response) => {

              if (response.ok) {
                localStorage.setItem(SLACK_CLEANER_TOKEN, response.authed_user.access_token);
                this.httpService.setToken(response.authed_user.access_token);
                this.router.navigateByUrl('/dashboard');
              }

              return new layoutActions.LayoutExchangeCodeForTokenSuccess(response);
            })
          );
      })
    );

  constructor(
    private readonly actions$: Actions,
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly httpService: HttpService) {
  }
}
