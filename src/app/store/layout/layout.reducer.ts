import * as layoutActions from './layout.actions';

export interface ILayout {
  user?: any;
}

const initialState: ILayout = {};

export function layoutReducer(state: ILayout = initialState, action: layoutActions.Actions): ILayout {

  switch (action.type) {

    case layoutActions.LAYOUT_EXCHANGE_CODE_FOR_TOKEN_SUCCESS:

      return {
        user: action.payload
      };

    default:
      return state;
  }
}
