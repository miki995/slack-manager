import { Action } from '@ngrx/store';
import { EFilesFilter, IFile, IFilesQueryParams, IFilesResponse } from '../../../../models/file-filter';
import { IConversationsResponse } from '../../../../models/conversation';
import { IUser, IUsersResponse } from '../../../../models/user';

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

export const DASHBOARD_GET_USERS = '[Dashboard]: get users';
export const DASHBOARD_GET_USERS_SUCCESS = '[Dashboard]: get users success';
export const DASHBOARD_GET_USERS_FAIL = '[Dashboard]: get users fail';

export class DashboardGetUsers implements Action {
  readonly type = DASHBOARD_GET_USERS;

  constructor(public payload?: any) {
  }
}

export class DashboardGetUsersSuccess implements Action {
  readonly type = DASHBOARD_GET_USERS_SUCCESS;

  constructor(public payload: IUsersResponse) {
  }
}

export class DashboardGetUsersFail implements Action {
  readonly type = DASHBOARD_GET_USERS_FAIL;

  constructor(public payload: any) {
  }
}

export const DASHBOARD_GET_PROFILE = '[Dashboard]: get profile';
export const DASHBOARD_GET_PROFILE_SUCCESS = '[Dashboard]: get profile success';
export const DASHBOARD_GET_PROFILE_FAIL = '[Dashboard]: get profile fail';

export class DashboardGetProfile implements Action {
  readonly type = DASHBOARD_GET_PROFILE;

  constructor(public payload?: any) {
  }
}

export class DashboardGetProfileSuccess implements Action {
  readonly type = DASHBOARD_GET_PROFILE_SUCCESS;

  constructor(public payload: IUser) {
  }
}

export class DashboardGetProfileFail implements Action {
  readonly type = DASHBOARD_GET_PROFILE_FAIL;

  constructor(public payload: any) {
  }
}

export const DASHBOARD_GET_FILE_INFO = '[Dashboard]: get file info';
export const DASHBOARD_GET_FILE_INFO_SUCCESS = '[Dashboard]: get file info success';
export const DASHBOARD_GET_FILE_INFO_FAIL = '[Dashboard]: get file info fail';

export class DashboardGetFileInfo implements Action {
  readonly type = DASHBOARD_GET_FILE_INFO;

  constructor(public payload?: any) {
  }
}

export class DashboardGetFileInfoSuccess implements Action {
  readonly type = DASHBOARD_GET_FILE_INFO_SUCCESS;

  constructor(public payload: IFilesResponse) {
  }
}

export class DashboardGetFileInfoFail implements Action {
  readonly type = DASHBOARD_GET_FILE_INFO_FAIL;

  constructor(public payload: any) {
  }
}

export const DASHBOARD_DELETE_FILE = '[Dashboard]: delete file';
export const DASHBOARD_DELETE_FILE_SUCCESS = '[Dashboard]: delete file success';
export const DASHBOARD_DELETE_FILE_FAIL = '[Dashboard]: delete file fail';

export class DashboardDeleteFile implements Action {
  readonly type = DASHBOARD_DELETE_FILE;

  constructor(public payload?: any) {
  }
}

export class DashboardDeleteFileSuccess implements Action {
  readonly type = DASHBOARD_DELETE_FILE_SUCCESS;

  constructor(public payload?: any) {
  }
}

export class DashboardDeleteFileFail implements Action {
  readonly type = DASHBOARD_DELETE_FILE_FAIL;

  constructor(public payload: any) {
  }
}

export const DASHBOARD_BULK_DELETE_FILE = '[Dashboard]: bluk delete file';
export const DASHBOARD_BULK_DELETE_FILE_SUCCESS = '[Dashboard]: bluk delete file success';
export const DASHBOARD_BULK_DELETE_FILE_FAIL = '[Dashboard]: bluk delete file fail';

export class DashboardBulkDeleteFile implements Action {
  readonly type = DASHBOARD_BULK_DELETE_FILE;

  constructor(public payload?: any) {
  }
}

export class DashboardBulkDeleteFileSuccess implements Action {
  readonly type = DASHBOARD_BULK_DELETE_FILE_SUCCESS;

  constructor(public payload?: any) {
  }
}

export class DashboardBulkDeleteFileFail implements Action {
  readonly type = DASHBOARD_BULK_DELETE_FILE_FAIL;

  constructor(public payload: any) {
  }
}

export const DASHBOARD_SEARCH_FILES = '[Dashboard]: search files';
export const DASHBOARD_SEARCH_FILES_SUCCESS = '[Dashboard]: search files success';
export const DASHBOARD_SEARCH_FILES_FAIL = '[Dashboard]: search files fail';

export class DashboardSearchFiles implements Action {
  readonly type = DASHBOARD_SEARCH_FILES;

  constructor(public payload?: any) {
  }
}

export class DashboardSearchFilesSuccess implements Action {
  readonly type = DASHBOARD_SEARCH_FILES_SUCCESS;

  constructor(public payload?: { ok: boolean, files: { matches: IFile[] } }) {
  }
}

export class DashboardSearchFilesFail implements Action {
  readonly type = DASHBOARD_SEARCH_FILES_FAIL;

  constructor(public payload: any) {
  }
}

export const DASHBOARD_SET_SELECTED_FILE_FOR_DELETE = '[Dashboard]: set selected file for delete';
export const DASHBOARD_SET_ALL_SELECTED_FILES_FOR_DELETE = '[Dashboard]: set all selected files for delete';
export const DASHBOARD_DOWNLOAD_SELECTED_FILES = '[Dashboard]: download all selected files for delete';

export class DashboardSetSelectedFileForDelete implements Action {
  readonly type = DASHBOARD_SET_SELECTED_FILE_FOR_DELETE;

  constructor(public payload: string) {
  }
}

export class DashboardSetAllSelectedFilesForDelete implements Action {
  readonly type = DASHBOARD_SET_ALL_SELECTED_FILES_FOR_DELETE;

  constructor(public payload?: any) {
  }
}

export const DASHBOARD_SET_FILES_DELETING = '[Dashboard]: set files deleting';

export class DashboardSetFilesDeleting implements Action {
  readonly type = DASHBOARD_SET_FILES_DELETING;

  constructor(public payload: boolean) {
  }
}

export class DashboardDownloadAllSelectedFilesForDelete implements Action {
  readonly type = DASHBOARD_DOWNLOAD_SELECTED_FILES;

  constructor(public payload?: any) {
  }
}

export const DASHBOARD_SET_CAN_BULK_DELETE = '[Dashboard]: set can bulk delete files';

export class DashboardSetCanBulkDeleteFiles implements Action {
  readonly type = DASHBOARD_SET_CAN_BULK_DELETE;

  constructor(public payload: boolean) {
  }
}

export const DASHBOARD_SET_BULK_DELETE_ALL = '[Dashboard]: set bulk delete all';

export class DashboardSetBulkDeleteAll implements Action {
  readonly type = DASHBOARD_SET_BULK_DELETE_ALL;

  constructor(public payload?: boolean) {
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
  | DashboardGetConversationsFail
  | DashboardGetUsers
  | DashboardGetUsersSuccess
  | DashboardGetUsersFail
  | DashboardGetProfile
  | DashboardGetProfileSuccess
  | DashboardGetProfileFail
  | DashboardGetFileInfo
  | DashboardGetFileInfoSuccess
  | DashboardGetFileInfoFail
  | DashboardDeleteFile
  | DashboardDeleteFileSuccess
  | DashboardDeleteFileFail
  | DashboardBulkDeleteFile
  | DashboardBulkDeleteFileSuccess
  | DashboardBulkDeleteFileFail
  | DashboardSearchFiles
  | DashboardSearchFilesSuccess
  | DashboardSearchFilesFail
  | DashboardSetSelectedFileForDelete
  | DashboardSetAllSelectedFilesForDelete
  | DashboardDownloadAllSelectedFilesForDelete
  | DashboardSetFilesDeleting
  | DashboardSetCanBulkDeleteFiles
  | DashboardSetBulkDeleteAll;


