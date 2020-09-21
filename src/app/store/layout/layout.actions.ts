import { Action } from '@ngrx/store';

export const LAYOUT_EXCHANGE_CODE_FOR_TOKEN = '[Layout]: exchange code for token';
export const LAYOUT_EXCHANGE_CODE_FOR_TOKEN_SUCCESS = '[Layout]: exchange code for token success';
export const LAYOUT_EXCHANGE_CODE_FOR_TOKEN_FAIL = '[Layout]: exchange code for token fail';

export class LayoutExchangeCodeForToken implements Action {
  readonly type = LAYOUT_EXCHANGE_CODE_FOR_TOKEN;

  constructor(public payload: string) {
  }
}

export class LayoutExchangeCodeForTokenSuccess implements Action {
  readonly type = LAYOUT_EXCHANGE_CODE_FOR_TOKEN_SUCCESS;

  constructor(public payload?: any) {
  }
}

export class LayoutExchangeCodeForTokenFail implements Action {
  readonly type = LAYOUT_EXCHANGE_CODE_FOR_TOKEN_FAIL;

  constructor(public payload: string) {
  }
}

export type Actions =
  | LayoutExchangeCodeForToken
  | LayoutExchangeCodeForTokenSuccess
  | LayoutExchangeCodeForTokenFail;
