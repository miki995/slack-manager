import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { config } from '../../../../config/config';

@Injectable()
export class DashboardEffects {

  private i18nAPI = config.apiEndpoint + '/api/i18n';  // URL to i18nUrl api


  /*@Effect()
  languageLoad$ = this.actions$
    .pipe(
      ofType(layoutActions.LAYOUT_LANGUAGE_LOAD),
      switchMap((action: layoutActions.LayoutLanguageLoad) => {

        return this.httpService.get(`${this.i18nAPI}/${action.payload}`)
          .pipe(
            catchError((error) => of(new layoutActions.LayoutLanguageLoadFail(error))),
            map((response) => new layoutActions.LayoutLanguageLoadSuccess(response))
          );
      })
    );*/

  constructor(private readonly actions$: Actions) {
  }
}
