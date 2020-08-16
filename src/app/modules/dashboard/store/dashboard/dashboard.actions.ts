import { Action } from '@ngrx/store';

export const DASHBOARD_ACTION = '[Dashboard]: action';

export class DashboardAction implements Action {
  readonly type = DASHBOARD_ACTION;

  constructor(public payload?: any) {
  }
}

export type Actions =
  | DashboardAction;


