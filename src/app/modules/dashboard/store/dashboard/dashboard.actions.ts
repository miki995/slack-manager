import { Action } from '@ngrx/store';
import { EFilesFilter, IFilesQueryParams, IFilesResponse } from '../../../../models/file-filter';

export const DASHBOARD_SET_FILES_FILTER = '[Dashboard]: set files filter';

export class DashboardSetFilesFilter implements Action {
  readonly type = DASHBOARD_SET_FILES_FILTER;

  constructor(public payload: EFilesFilter) {
  }
}

export const DASHBOARD_GET_FILES = '[Dashboard]: get files';
export const DASHBOARD_GET_FILES_SUCCESS = '[Dashboard]: get files success';
export const DASHBOARD_GET_FILES_FAIL = '[Dashboard]: get files fail';

export class DashboardGetFiles implements Action {
  readonly type = DASHBOARD_GET_FILES;

  constructor(public payload?: any) {
  }
}

export class DashboardGetFilesSuccess implements Action {
  readonly type = DASHBOARD_GET_FILES_SUCCESS;

  constructor(public payload: IFilesResponse) {
  }
}

export class DashboardGetFilesFail implements Action {
  readonly type = DASHBOARD_GET_FILES_FAIL;

  constructor(public payload: any) {
  }
}

export const DASHBOARD_SET_INITIAL_STATE = '[Dashboard]: set initialState';

export class DashboardSetInitialState implements Action {
  readonly type = DASHBOARD_SET_INITIAL_STATE;

  constructor(public payload?: any) {
  }
}

export const DASHBOARD_SET_FILES_QUERY_PARAMS = '[Dashboard]: set files query params';

export class DashboardSetQueryParams implements Action {
  readonly type = DASHBOARD_SET_FILES_QUERY_PARAMS;

  constructor(public payload: IFilesQueryParams) {
  }
}

export const DASHBOARD_SET_FILES_SEARCH = '[Dashboard]: set files search term';

export class DashboardSetFilesSearch implements Action {
  readonly type = DASHBOARD_SET_FILES_SEARCH;

  constructor(public payload: string) {
  }
}

export type Actions =
  DashboardSetInitialState
  | DashboardSetFilesFilter
  | DashboardGetFiles
  | DashboardGetFilesSuccess
  | DashboardGetFilesFail
  | DashboardSetQueryParams
  | DashboardSetFilesSearch;


