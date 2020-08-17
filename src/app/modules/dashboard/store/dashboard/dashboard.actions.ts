import { Action } from '@ngrx/store';
import { EFilesFilter } from '../../../../models/file-filter';

export const DASHBOARD_SET_FILES_FILTER = '[Dashboard]: set files filter';

export class DashboardSetFilesFilter implements Action {
  readonly type = DASHBOARD_SET_FILES_FILTER;

  constructor(public payload: EFilesFilter) {
  }
}

export type Actions =
  | DashboardSetFilesFilter;


