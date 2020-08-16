import { Action } from '@ngrx/store';

export const LAYOUT_ACTION = '[Layout]: action';

export class LayoutAction implements Action {
  readonly type = LAYOUT_ACTION;

  constructor(public payload?: any) {
  }
}

export type Actions =
  | LayoutAction;


