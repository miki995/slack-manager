import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, distinctUntilChanged, map, pluck, switchMap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import * as dashboardActions from './dashboard.actions';
import { FilesService } from '../../../../services/files.service';
import { select, Store } from '@ngrx/store';
import { getDashboardState, IDashboardState } from '../index';
import { IFilesQueryParams } from '../../../../models/file-filter';

const getFilesTriggers = [
  dashboardActions.DASHBOARD_SET_FILES_FILTER,
  dashboardActions.DASHBOARD_SET_FILES_QUERY_PARAMS,
];

@Injectable()
export class DashboardEffects {

  @Effect()
  triggerGetFiles$ = this.actions$
    .pipe(
      ofType(...getFilesTriggers),
      switchMap((action: dashboardActions.DashboardSetFilesFilter) => {
        return of(new dashboardActions.DashboardGetFiles());
      })
    );

  @Effect()
  getFiles$ = this.actions$
    .pipe(
      ofType(dashboardActions.DASHBOARD_GET_FILES),
      withLatestFrom(this.store.pipe(select(getDashboardState), pluck('filesQueryParams'), distinctUntilChanged<IFilesQueryParams>())),
      switchMap(([action, filesQueryParams]: [dashboardActions.DashboardGetFiles, IFilesQueryParams]) => {

        return this.filesService.getFiles(filesQueryParams)
          .pipe(
            catchError((error) => of(new dashboardActions.DashboardGetFilesFail(error))),
            map((response) => new dashboardActions.DashboardGetFilesSuccess(response))
          );
      })
    );

  constructor(
    private readonly actions$: Actions,
    private readonly filesService: FilesService,
    private readonly store: Store<IDashboardState>
  ) {
  }
}
