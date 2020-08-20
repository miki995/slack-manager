import * as dashboardActions from './dashboard.actions';
import {
  EFilesCount,
  EFilesFilter,
  EFilesSortByDate,
  EFilesSortBySize, IFile,
  IFilesQueryParams,
  IFilesResponse
} from '../../../../models/file-filter';
import { detectFileTypePercentage, EFileTypeValue, IFilePercentage, sortFiles } from '../../../../helpers/file.helper';
import { IConversationsResponse } from '../../../../models/conversation';
import { IUsersResponse } from '../../../../models/user';

export interface IDashboard {
  filesFilter: EFilesFilter;
  filesResponse?: IFilesResponse;
  allFilesResponse?: IFilesResponse;
  filesQueryParams?: IFilesQueryParams;
  conversationsResponse?: IConversationsResponse;
  filePercentages?: IFilePercentage[];
  recentFiles?: IFile[];
  usersResponse?: IUsersResponse;
}

const initialState: IDashboard = {
  filesFilter: EFilesFilter.files,
  filesQueryParams: {
    count: EFilesCount.count10,
    searchTerm: '',
    size: EFilesSortBySize.largest,
    types: [ EFileTypeValue.all ],
    ts_from: null,
    ts_to: null
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

    case dashboardActions.DASHBOARD_GET_ALL_FILES_SUCCESS:

      const filePercentages: IFilePercentage[] = detectFileTypePercentage(action.payload.files);

      return {
        ...state,
        allFilesResponse: action.payload,
        filePercentages,
        recentFiles: sortFiles(action.payload.files, { date: EFilesSortByDate.newest }).splice(0, 5)
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

    case dashboardActions.DASHBOARD_GET_CONVERSATIONS_SUCCESS:

      return {
        ...state,
        conversationsResponse: action.payload
      };

    case dashboardActions.DASHBOARD_GET_USERS_SUCCESS:

      return {
        ...state,
        usersResponse: {
          ...action.payload,
          members: action.payload.members.filter(item => !item.is_bot),
          bots: action.payload.members.filter(item => item.is_bot)
        }
      };

    default:
      return state;
  }
}
