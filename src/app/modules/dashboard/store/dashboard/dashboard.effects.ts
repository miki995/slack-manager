import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, distinctUntilChanged, map, pluck, switchMap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import * as dashboardActions from './dashboard.actions';
import { FilesService } from '../../../../services/files.service';
import { select, Store } from '@ngrx/store';
import { getDashboardState, IDashboardState } from '../index';
import { IFilesQueryParams } from '../../../../models/file-filter';
import { ConversationsService } from '../../../../services/conversations.service';

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
      switchMap((action: any) => {
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

  @Effect()
  getAllFiles$ = this.actions$
    .pipe(
      ofType(dashboardActions.DASHBOARD_GET_ALL_FILES),
      withLatestFrom(this.store.pipe(select(getDashboardState), pluck('filesQueryParams'), distinctUntilChanged<IFilesQueryParams>())),
      switchMap(([action, filesQueryParams]: [dashboardActions.DashboardGetFiles, IFilesQueryParams]) => {

        return this.filesService.getFiles({ ...filesQueryParams, count: 999, ts_from: null, types: null, channel: null, ts_to: null, size: null, page: null })
          .pipe(
            catchError((error) => of(new dashboardActions.DashboardGetAllFilesFail(error))),
            map((response) => new dashboardActions.DashboardGetAllFilesSuccess(response))
          );
      })
    );

  @Effect()
  getConversations$ = this.actions$
    .pipe(
      ofType(dashboardActions.DASHBOARD_GET_CONVERSATIONS),
      switchMap((action: dashboardActions.DashboardGetFiles) => {

        return this.conversationsService.getConversations()
          .pipe(
            catchError((error) => of(new dashboardActions.DashboardGetConversationsFail(error))),
            map((response) => new dashboardActions.DashboardGetConversationsSuccess(response))
          );
      })
    );

  constructor(
    private readonly actions$: Actions,
    private readonly filesService: FilesService,
    private readonly conversationsService: ConversationsService,
    private readonly store: Store<IDashboardState>
  ) {
  }
}
