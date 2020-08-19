import * as dashboardActions from './dashboard.actions';
import { EFilesCount, EFilesFilter, EFilesSortBySize, IFilesQueryParams, IFilesResponse } from '../../../../models/file-filter';
import { EFileTypeValue, sortFiles } from '../../../../helpers/file.helper';

export interface IDashboard {
  filesFilter: EFilesFilter;
  filesResponse?: IFilesResponse;
  filesQueryParams?: IFilesQueryParams;
}

const initialState: IDashboard = {
  filesFilter: EFilesFilter.files,
  filesQueryParams: {
    count: EFilesCount.count10,
    searchTerm: '',
    size: EFilesSortBySize.largest,
    types: [EFileTypeValue.all]
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

      const files = sortFiles(action.payload.files, state.filesQueryParams);

      return {
        ...state,
        filesResponse: {
          ...action.payload,
          files
        },
      };

    case dashboardActions.DASHBOARD_SET_FILES_QUERY_PARAMS:

      return {
        ...state,
        filesQueryParams: {
          ...state.filesQueryParams,
          ...action.payload
        }
      };

    case dashboardActions.DASHBOARD_OVERRIDE_FILES_QUERY_PARAMS:
      return {
        ...state,
        filesQueryParams: {
          ...state.filesQueryParams,
          ...action.payload
        },
        filesResponse: {
          ...state.filesResponse,
          files: sortFiles(state.filesResponse.files, action.payload)
        }
      };

    default:
      return state;
  }
}
