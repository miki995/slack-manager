import * as layoutActions from './layout.actions';

export interface ILayout {
  currentRoute: string;
}

const initialState: ILayout = {
  currentRoute: null,
};

export function layoutReducer(state: ILayout = initialState, action: layoutActions.Actions): ILayout {

  switch (action.type) {

  /*  case layoutActions.LAYOUT_SET_CURRENT_ROUTE:

      return {
        currentRoute: action.payload
      };
*/
    default:
      return state;
  }
}
