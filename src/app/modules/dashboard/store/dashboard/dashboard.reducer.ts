import * as layoutActions from './dashboard.actions';
import { EFilesFilter } from '../../../../models/file-filter';

export interface IDashboard {
  filesFilter: EFilesFilter;
}

const initialState: IDashboard = {
  filesFilter: EFilesFilter.files,
};

export function dashboardReducer(state: IDashboard = initialState, action: layoutActions.Actions): IDashboard {

  switch (action.type) {

    case layoutActions.DASHBOARD_SET_FILES_FILTER:

      return {
        filesFilter: action.payload,
      };

    default:
      return state;
  }
}
