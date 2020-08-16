import * as layoutActions from './dashboard.actions';

export interface IDashboard {
  data: string;
}

const initialState: IDashboard = {
  data: null,
};

export function dashboardReducer(state: IDashboard = initialState, action: layoutActions.Actions): IDashboard {

  switch (action.type) {

    case layoutActions.DASHBOARD_ACTION:

      return {
        ...initialState,
      };

    default:
      return state;
  }
}
