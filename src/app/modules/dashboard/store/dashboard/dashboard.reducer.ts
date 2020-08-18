import * as layoutActions from './dashboard.actions';
import { EFilesCount, EFilesFilter, IFilesQueryParams, IFilesResponse } from '../../../../models/file-filter';

export interface IDashboard {
  filesFilter: EFilesFilter;
  filesResponse?: IFilesResponse;
  filesQueryParams?: IFilesQueryParams;
}

const initialState: IDashboard = {
  filesFilter: EFilesFilter.files,
  filesQueryParams: {
    count: EFilesCount.count10
  }
};

export function dashboardReducer(state: IDashboard = initialState, action: layoutActions.Actions): IDashboard {

  switch (action.type) {

    case layoutActions.DASHBOARD_SET_INITIAL_STATE:

      return {
        ...initialState,
      };

    case layoutActions.DASHBOARD_SET_FILES_FILTER:

      return {
        ...state,
        filesFilter: action.payload,
      };

    case layoutActions.DASHBOARD_GET_FILES_SUCCESS:

      return {
        ...state,
        filesResponse: action.payload,
      };

    case layoutActions.DASHBOARD_SET_FILES_QUERY_PARAMS:

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
