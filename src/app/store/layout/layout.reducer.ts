import * as layoutActions from './layout.actions';

export interface ILayout {
  data: string;
}

const initialState: ILayout = {
  data: null,
};

export function layoutReducer(state: ILayout = initialState, action: layoutActions.Actions): ILayout {

  switch (action.type) {

    case layoutActions.LAYOUT_ACTION:

      return {
        ...initialState,
      };

    default:
      return state;
  }
}
