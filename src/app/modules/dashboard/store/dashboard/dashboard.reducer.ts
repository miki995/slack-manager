import * as dashboardActions from './dashboard.actions';
import {
  EFilesCount,
  EFilesFilter,
  EFilesSortByDate,
  EFilesSortBySize,
  IFile,
  IFilesQueryParams,
  IFilesResponse
} from '../../../../models/file-filter';
import { detectFileTypePercentage, EFileTypeValue, getSize, IFilePercentage, sortFiles } from '../../../../helpers/file.helper';
import { IConversationsResponse } from '../../../../models/conversation';
import { IUserProfile, IUsersResponse } from '../../../../models/user';

export interface IDashboard {
  filesFilter: EFilesFilter;
  filesResponse?: IFilesResponse;
  dashFilesLoading: boolean;
  allFilesResponse?: IFilesResponse;
  filesLoading: boolean;
  filesQueryParams?: IFilesQueryParams;
  conversationsResponse?: IConversationsResponse;
  filePercentages?: IFilePercentage[];
  recentFiles?: IFile[];
  usersResponse?: IUsersResponse;
  maxStorage: number;
  usedStorage?: number;
  usedStoragePercentage?: number;
  profile?: IUserProfile;
  profileLoading: boolean;
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
  maxStorage: 5 * 1024 * 1024 * 1024,
  profileLoading: false,
  filesLoading: false,
  dashFilesLoading: false
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

    case dashboardActions.DASHBOARD_GET_FILES:

      return {
        ...state,
        dashFilesLoading: true
      };

    case dashboardActions.DASHBOARD_GET_FILES_SUCCESS:

      const files = sortFiles(action.payload.files, state.filesQueryParams);

      return {
        ...state,
        filesResponse: {
          ...action.payload,
          files
        },
        dashFilesLoading: false
      };

    case dashboardActions.DASHBOARD_GET_FILES_FAIL:

      return {
        ...state,
        dashFilesLoading: false
      };

    case dashboardActions.DASHBOARD_GET_ALL_FILES:

      return {
        ...state,
        filesLoading: true
      };

    case dashboardActions.DASHBOARD_GET_ALL_FILES_SUCCESS:

      const filePercentages: IFilePercentage[] = detectFileTypePercentage(action.payload.files);
      const usedStorage = getSize(action.payload.files);

      return {
        ...state,
        allFilesResponse: action.payload,
        filePercentages,
        recentFiles: sortFiles(action.payload.files, { date: EFilesSortByDate.newest }).splice(0, 5),
        usedStorage,
        usedStoragePercentage: Math.ceil(Number(((usedStorage * 100) / state.maxStorage).toFixed(2))),
        filesLoading: false
      };

    case dashboardActions.DASHBOARD_GET_ALL_FILES_FAIL:

      return {
        ...state,
        filesLoading: false
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
          members: !!action.payload?.members ? action.payload.members.filter(item => !item.is_bot) : [],
          bots: !!action.payload?.members ? action.payload.members.filter(item => item.is_bot) : []
        }
      };

    case dashboardActions.DASHBOARD_GET_PROFILE:

      return {
        ...state,
        profileLoading: true
      };

    case dashboardActions.DASHBOARD_GET_PROFILE_SUCCESS:

      return {
        ...state,
        profile: action.payload.profile,
        profileLoading: false
      };

    case dashboardActions.DASHBOARD_GET_PROFILE_FAIL:

      return {
        ...state,
        profileLoading: false
      };

    default:
      return state;
  }
}
