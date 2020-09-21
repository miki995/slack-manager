import * as layoutActions from './layout.actions';

export interface ILayout {
  user?: any;
  loadingPage: boolean;
}

const initialState: ILayout = {
  loadingPage: false
};

export function layoutReducer(state: ILayout = initialState, action: layoutActions.Actions): ILayout {

  switch (action.type) {

    case layoutActions.LAYOUT_EXCHANGE_CODE_FOR_TOKEN:

      return {
        user: action.payload,
        loadingPage: true
      };

    case layoutActions.LAYOUT_EXCHANGE_CODE_FOR_TOKEN_SUCCESS:

      return {
        loadingPage: false
      };

    default:
      return state;
  }
}
