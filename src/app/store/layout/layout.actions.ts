import { Action } from '@ngrx/store';

export const LAYOUT_SET_CURRENT_ROUTE = '[Layout]: set current route';

export class LayoutSetCurrentRoute implements Action {
  readonly type = LAYOUT_SET_CURRENT_ROUTE;

  constructor(public payload: string) {
  }
}

export type Actions =
  | LayoutSetCurrentRoute;


