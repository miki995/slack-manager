import { Action } from '@ngrx/store';
import { EFilesFilter, IFilesQueryParams, IFilesResponse } from '../../../../models/file-filter';
import { IConversationsResponse } from '../../../../models/conversation';

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

export const DASHBOARD_GET_ALL_FILES = '[Dashboard]: get all files';
export const DASHBOARD_GET_ALL_FILES_SUCCESS = '[Dashboard]: get all files success';
export const DASHBOARD_GET_ALL_FILES_FAIL = '[Dashboard]: get all files fail';

export class DashboardGetAllFiles implements Action {
  readonly type = DASHBOARD_GET_ALL_FILES;

  constructor(public payload?: any) {
  }
}

export class DashboardGetAllFilesSuccess implements Action {
  readonly type = DASHBOARD_GET_ALL_FILES_SUCCESS;

  constructor(public payload: IFilesResponse) {
  }
}

export class DashboardGetAllFilesFail implements Action {
  readonly type = DASHBOARD_GET_ALL_FILES_FAIL;

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
export const DASHBOARD_OVERRIDE_FILES_QUERY_PARAMS = '[Dashboard]: override files query params';

export class DashboardSetQueryParams implements Action {
  readonly type = DASHBOARD_SET_FILES_QUERY_PARAMS;

  constructor(public payload: IFilesQueryParams) {
  }
}

export class DashboardOverrideQueryParams implements Action {
  readonly type = DASHBOARD_OVERRIDE_FILES_QUERY_PARAMS;

  constructor(public payload: IFilesQueryParams) {
  }
}

export const DASHBOARD_GET_CONVERSATIONS = '[Dashboard]: get conversations';
export const DASHBOARD_GET_CONVERSATIONS_SUCCESS = '[Dashboard]: get conversations success';
export const DASHBOARD_GET_CONVERSATIONS_FAIL = '[Dashboard]: get conversations fail';

export class DashboardGetConversations implements Action {
  readonly type = DASHBOARD_GET_CONVERSATIONS;

  constructor(public payload?: any) {
  }
}

export class DashboardGetConversationsSuccess implements Action {
  readonly type = DASHBOARD_GET_CONVERSATIONS_SUCCESS;

  constructor(public payload: IConversationsResponse) {
  }
}

export class DashboardGetConversationsFail implements Action {
  readonly type = DASHBOARD_GET_CONVERSATIONS_FAIL;

  constructor(public payload: any) {
  }
}

export type Actions =
  DashboardSetInitialState
  | DashboardSetFilesFilter
  | DashboardGetFiles
  | DashboardGetFilesSuccess
  | DashboardGetFilesFail
  | DashboardGetAllFiles
  | DashboardGetAllFilesSuccess
  | DashboardGetAllFilesFail
  | DashboardSetQueryParams
  | DashboardOverrideQueryParams
  | DashboardGetConversations
  | DashboardGetConversationsSuccess
  | DashboardGetConversationsFail;


