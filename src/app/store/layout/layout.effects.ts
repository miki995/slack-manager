import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { config } from '../../config/config';
import { switchMap } from 'rxjs/operators';
import * as layoutActions from './layout.actions';
import { of } from 'rxjs';
import { getLocation } from '../../modules/shared/helpers/router.helper';

@Injectable()
export class LayoutEffects {

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
