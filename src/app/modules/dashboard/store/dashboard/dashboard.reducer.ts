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
  usersLoading: boolean;
  maxStorage: number;
  usedStorage?: number;
  usedStoragePercentage?: number;
  profile?: IUserProfile;
  profileLoading: boolean;
  fileDetail?: IFile;
  fileDetailLoading?: boolean;
  fileDeleting: boolean;
  searchedFiles: IFile[];
  searchingFiles: boolean;
  selectedFilesForDelete: string[];
  filesDeleting: boolean;
  canBulkDelete: boolean;
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
  dashFilesLoading: false,
  usersLoading: false,
  fileDeleting: false,
  searchingFiles: false,
  searchedFiles: [],
  selectedFilesForDelete: [],
  filesDeleting: false,
  canBulkDelete: true
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

    case dashboardActions.DASHBOARD_GET_USERS:

      return {
        ...state,
        usersLoading: true
      };

    case dashboardActions.DASHBOARD_GET_USERS_SUCCESS:

      return {
        ...state,
        usersResponse: {
          ...action.payload,
          members: !!action.payload?.members ? action.payload.members.filter(item => !item.is_bot) : [],
          bots: !!action.payload?.members ? action.payload.members.filter(item => item.is_bot) : []
        },
        usersLoading: false
      };

    case dashboardActions.DASHBOARD_GET_USERS_FAIL:

      return {
        ...state,
        usersLoading: false
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

    case dashboardActions.DASHBOARD_GET_FILE_INFO:

      return {
        ...state,
        fileDetailLoading: true
      };

    case dashboardActions.DASHBOARD_GET_FILE_INFO_SUCCESS:

      return {
        ...state,
        fileDetail: action.payload.file,
        fileDetailLoading: false
      };

    case dashboardActions.DASHBOARD_GET_FILE_INFO_FAIL:

      return {
        ...state,
        fileDetailLoading: false
      };

    case dashboardActions.DASHBOARD_DELETE_FILE:
    case dashboardActions.DASHBOARD_BULK_DELETE_FILE:

      return {
        ...state,
        fileDeleting: true
      };

    case dashboardActions.DASHBOARD_DELETE_FILE_SUCCESS:
    case dashboardActions.DASHBOARD_BULK_DELETE_FILE_SUCCESS:

      const allFilesResponseIndex = state.allFilesResponse.files.findIndex(file => file.id === action.payload);
      const filesResponseIndex = state.filesResponse.files.findIndex(file => file.id === action.payload);
      const searchedFilesResponseIndex = state.searchedFiles.findIndex(file => file.id === action.payload);
      const selectedFilesIndex = state.selectedFilesForDelete.findIndex(file => file === action.payload);

      const allFiles = [ ...state.allFilesResponse.files ];
      if (allFilesResponseIndex !== -1) {
        allFiles.splice(allFilesResponseIndex, 1);
      }
      const newFiles = [ ...state.filesResponse.files ];
      if (filesResponseIndex !== -1) {
        newFiles.splice(filesResponseIndex, 1);
      }
      const newSearchedFiles = [ ...state.searchedFiles ];
      if (searchedFilesResponseIndex !== -1) {
        newSearchedFiles.splice(searchedFilesResponseIndex, 1);
      }

      const newSelectedFiles = [ ...state.selectedFilesForDelete ];
      if (selectedFilesIndex !== -1) {
        newSelectedFiles.splice(selectedFilesIndex, 1);
      }

      const newFilePercentages: IFilePercentage[] = detectFileTypePercentage(allFiles);
      const newUsedStorage = getSize(allFiles);

      return {
        ...state,
        fileDeleting: false,
        filesResponse: {
          ...state.filesResponse,
          files: newFiles
        },
        allFilesResponse: {
          ...state.allFilesResponse,
          files: allFiles
        },
        searchedFiles: newSearchedFiles,
        filePercentages: newFilePercentages,
        usedStorage: newUsedStorage,
        usedStoragePercentage: Math.ceil(Number(((newUsedStorage * 100) / state.maxStorage).toFixed(2))),
        recentFiles: sortFiles(allFiles, { date: EFilesSortByDate.newest }).splice(0, 5),
        selectedFilesForDelete: newSelectedFiles
      };

    case dashboardActions.DASHBOARD_DELETE_FILE_FAIL:
    case dashboardActions.DASHBOARD_BULK_DELETE_FILE_FAIL:

      return {
        ...state,
        fileDeleting: false
      };

    case dashboardActions.DASHBOARD_SEARCH_FILES:

      return {
        ...state,
        searchingFiles: true
      };

    case dashboardActions.DASHBOARD_SEARCH_FILES_SUCCESS:

      return {
        ...state,
        searchingFiles: false,
        searchedFiles: action.payload?.ok ? action.payload.files.matches : []
      };

    case dashboardActions.DASHBOARD_SEARCH_FILES_FAIL:

      return {
        ...state,
        searchingFiles: false
      };

    case dashboardActions.DASHBOARD_SET_ALL_SELECTED_FILES_FOR_DELETE:

      const shouldClear = state.selectedFilesForDelete.length === state.filesResponse.files.length;
      const selectedFilesForDelete = shouldClear ? [] : state.filesResponse.files.map(file => file.id);

      return {
        ...state,
        selectedFilesForDelete
      };

    case dashboardActions.DASHBOARD_SET_SELECTED_FILE_FOR_DELETE:

      const selectedFiles = [...state.selectedFilesForDelete];
      const fileIndex = selectedFiles?.length ? selectedFiles.findIndex(selectedFile => selectedFile === action.payload) : -1;

      if (fileIndex !== -1) {
        selectedFiles.splice(fileIndex, 1);
      } else {
        selectedFiles.push(action.payload);
      }

      return {
        ...state,
        selectedFilesForDelete: selectedFiles
      };

    case dashboardActions.DASHBOARD_SET_FILES_DELETING:

      return {
        ...state,
        filesDeleting: action.payload
      };

    case dashboardActions.DASHBOARD_SET_CAN_BULK_DELETE:

      return {
        ...state,
        canBulkDelete: action.payload,
        filesDeleting: !action.payload
      };

    case dashboardActions.DASHBOARD_SET_BULK_DELETE_ALL:

      return {
        ...state,
        filesResponse: state.allFilesResponse,
        selectedFilesForDelete: state.allFilesResponse.files.map(item => item.id),
        filesQueryParams: {
          ...state.filesQueryParams,
          count: EFilesCount.count999
        }
      };

    default:
      return state;
  }
}
