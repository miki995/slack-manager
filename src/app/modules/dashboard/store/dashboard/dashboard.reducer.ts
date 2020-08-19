import * as dashboardActions from './dashboard.actions';
import { EFilesCount, EFilesFilter, IFilesQueryParams, IFilesResponse } from '../../../../models/file-filter';

export interface IDashboard {
  filesFilter: EFilesFilter;
  filesResponse?: IFilesResponse;
  filesQueryParams?: IFilesQueryParams;
}

const initialState: IDashboard = {
  filesFilter: EFilesFilter.files,
  filesQueryParams: {
    count: EFilesCount.count10,
    searchTerm: ''
  },
};

export function dashboardReducer(state: IDashboard = initialState, action: dashboardActions.Actions): IDashboard {

  switch (action.type) {

    case dashboardActions.DASHBOARD_SET_INITIAL_STATE:

      return {
        ...initialState,
      };

    case dashboardActions.DASHBOARD_SET_FILES_FILTER:

      return {
        ...state,
        filesFilter: action.payload,
      };

    case dashboardActions.DASHBOARD_GET_FILES_SUCCESS:

      return {
        ...state,
        filesResponse: action.payload,
      };

    case dashboardActions.DASHBOARD_SET_FILES_QUERY_PARAMS:

      return {
        ...state,
        filesQueryParams: {
          ...state.filesQueryParams,
          ...action.payload
        }
      };

    default:
      return state;
  }
}
