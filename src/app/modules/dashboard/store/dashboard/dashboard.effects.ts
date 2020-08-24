import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, distinctUntilChanged, map, pluck, switchMap, withLatestFrom, flatMap, debounceTime } from 'rxjs/operators';
import { of } from 'rxjs';
import * as dashboardActions from './dashboard.actions';
import { FilesService } from '../../../../services/files.service';
import { select, Store } from '@ngrx/store';
import { getDashboardState, IDashboardState } from '../index';
import { IFilesQueryParams } from '../../../../models/file-filter';
import { ConversationsService } from '../../../../services/conversations.service';
import { UsersService } from '../../../../services/users.service';
import { ClipboardService, IClipboardResponse } from 'ngx-clipboard';

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
  triggerGetProfile$ = this.actions$
    .pipe(
      ofType(dashboardActions.DASHBOARD_SET_INITIAL_STATE),
      flatMap((action: any) => {
        return [
          new dashboardActions.DashboardGetProfile(),
          new dashboardActions.DashboardGetUsers(),
          new dashboardActions.DashboardGetAllFiles()
        ];
      })
    );

  @Effect({ dispatch: false })
  clipboardSubscribe$ = this.actions$
    .pipe(
      ofType(dashboardActions.DASHBOARD_SET_INITIAL_STATE),
      map((action: any) => {
        this.clipboardService.copyResponse$.subscribe((res: IClipboardResponse) => {
          if (res.isSuccess) {
            swal({
              title: 'You have just copied the link to the clipboard',
              text: res.content,
              icon: 'success',
              timer: 2000,
              button: 'Cool'
            });
            jQuery('.dropdown-menu.show').removeClass('show');
          }
        });
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
  getFileInfo$ = this.actions$
    .pipe(
      ofType(dashboardActions.DASHBOARD_GET_FILE_INFO),
      switchMap((action: dashboardActions.DashboardGetFileInfo) => {

        return this.filesService.getFile(action.payload)
          .pipe(
            catchError((error) => of(new dashboardActions.DashboardGetFileInfoFail(error))),
            map((response) => {
              jQuery('.dropdown-menu.show').removeClass('show');
              return new dashboardActions.DashboardGetFileInfoSuccess(response);
            })
          );
      })
    );

  @Effect()
  getAllFiles$ = this.actions$
    .pipe(
      ofType(dashboardActions.DASHBOARD_GET_ALL_FILES),
      withLatestFrom(this.store.pipe(select(getDashboardState), pluck('filesQueryParams'), distinctUntilChanged<IFilesQueryParams>())),
      switchMap(([action, filesQueryParams]: [dashboardActions.DashboardGetAllFiles, IFilesQueryParams]) => {

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
      switchMap((action: dashboardActions.DashboardGetConversations) => {

        return this.conversationsService.getConversations()
          .pipe(
            catchError((error) => of(new dashboardActions.DashboardGetConversationsFail(error))),
            map((response) => new dashboardActions.DashboardGetConversationsSuccess(response))
          );
      })
    );

  @Effect()
  getUsers$ = this.actions$
    .pipe(
      ofType(dashboardActions.DASHBOARD_GET_USERS),
      switchMap((action: dashboardActions.DashboardGetUsers) => {

        return this.usersService.getUsers()
          .pipe(
            catchError((error) => of(new dashboardActions.DashboardGetUsersFail(error))),
            map((response) => new dashboardActions.DashboardGetUsersSuccess(response))
          );
      })
    );

  @Effect()
  getProfile$ = this.actions$
    .pipe(
      ofType(dashboardActions.DASHBOARD_GET_PROFILE),
      switchMap((action: dashboardActions.DashboardGetProfile) => {

        return this.usersService.getProfile()
          .pipe(
            catchError((error) => of(new dashboardActions.DashboardGetProfileFail(error))),
            map((response) => new dashboardActions.DashboardGetProfileSuccess(response))
          );
      })
    );

  @Effect()
  deleteFile$ = this.actions$
    .pipe(
      ofType(dashboardActions.DASHBOARD_DELETE_FILE),
      switchMap((action: dashboardActions.DashboardDeleteFile) => {
        jQuery('.dropdown-menu.show').removeClass('show');

        return this.filesService.deleteFile(action.payload)
          .pipe(
            catchError((error) => of(new dashboardActions.DashboardDeleteFileFail(error))),
            map((response) => new dashboardActions.DashboardDeleteFileSuccess(action.payload))
          );
      })
    );

  @Effect()
  searchFiles$ = this.actions$
    .pipe(
      ofType(dashboardActions.DASHBOARD_SEARCH_FILES),
      switchMap((action: dashboardActions.DashboardSearchFiles) => {

        return this.filesService.searchFiles(action.payload)
          .pipe(
            catchError((error) => of(new dashboardActions.DashboardSearchFilesFail(error))),
            map((response) => new dashboardActions.DashboardSearchFilesSuccess(response))
          );
      })
    );

  constructor(
    private readonly actions$: Actions,
    private readonly filesService: FilesService,
    private readonly conversationsService: ConversationsService,
    private readonly usersService: UsersService,
    private readonly store: Store<IDashboardState>,
    private readonly clipboardService: ClipboardService,
  ) {
  }
}
