import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as layoutActions from './layout.actions';
import { of } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { SLACK_MANAGER_TOKEN } from '../../helpers/token.helper';
import { IExchangeTokenResponse } from '../../models/exchange-token-response';

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
            map((response: IExchangeTokenResponse) => {

              if (response.ok) {
                localStorage.setItem(SLACK_MANAGER_TOKEN, response.authed_user.access_token);
                this.httpService.setToken(response.authed_user.access_token);
                this.router.navigateByUrl('/dashboard/home');
              }

              return new layoutActions.LayoutExchangeCodeForTokenSuccess();
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
