import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getDashboardState, IDashboardState } from '../../../dashboard/store';
import { EFilesCount, EFilesFilter, IFilesQueryParams, IFilesResponse } from '../../../../models/file-filter';
import * as dashboardActions from '../../../dashboard/store/dashboard/dashboard.actions';
import { Observable } from 'rxjs';
import { distinctUntilChanged, pluck } from 'rxjs/operators';
import { IConversationsResponse } from '../../../../models/conversation';
import { IUsersResponse } from '../../../../models/user';

@Component({
  selector: 'app-dashboard-files',
  templateUrl: './dashboard-files.component.html',
  styleUrls: [ './dashboard-files.component.css' ]
})
export class DashboardFilesComponent implements OnInit {

  filesFilter$: Observable<EFilesFilter>;
  filesResponse$: Observable<IFilesResponse>;
  filesQueryParams$: Observable<IFilesQueryParams>;
  conversationsResponse$: Observable<IConversationsResponse>;
  usersResponse$: Observable<IUsersResponse>;

  constructor(private readonly store: Store<IDashboardState>) {
  }

  filesFilterChange(data: EFilesFilter): void {

    this.store.dispatch({
      type: dashboardActions.DASHBOARD_SET_FILES_FILTER,
      payload: data
    });
  }

  ngOnInit(): void {

    this.getConversations();
    this.getFiles();

    this.filesFilter$ = this.store.pipe(select(getDashboardState), pluck('filesFilter'), distinctUntilChanged<EFilesFilter>());
    this.filesResponse$ = this.store.pipe(select(getDashboardState), pluck('filesResponse'), distinctUntilChanged<IFilesResponse>());
    this.filesQueryParams$ = this.store.pipe(select(getDashboardState), pluck('filesQueryParams'), distinctUntilChanged<IFilesQueryParams>());
    this.conversationsResponse$ = this.store.pipe(select(getDashboardState), pluck('conversationsResponse'), distinctUntilChanged<IConversationsResponse>());
    this.usersResponse$ = this.store.pipe(select(getDashboardState), pluck('usersResponse'), distinctUntilChanged<IUsersResponse>());
  }

  getFiles(): void {
    this.store.dispatch({
      type: dashboardActions.DASHBOARD_GET_FILES
    });
  }

  getConversations(): void {
    this.store.dispatch({
      type: dashboardActions.DASHBOARD_GET_CONVERSATIONS
    });
  }

  onCountChanged(count: EFilesCount): void {

    this.store.dispatch({
      type: dashboardActions.DASHBOARD_SET_FILES_QUERY_PARAMS,
      payload: { count }
    });
  }

  onSearchTermChange(searchTerm: string): void {

    this.store.dispatch({
      type: dashboardActions.DASHBOARD_SET_FILES_QUERY_PARAMS,
      payload: { searchTerm }
    });
  }

  onPageChange(page: number): void {

    this.store.dispatch({
      type: dashboardActions.DASHBOARD_SET_FILES_QUERY_PARAMS,
      payload: { page }
    });
  }

  onFilesQueryParamsChange(queryParams: IFilesQueryParams): void {

    this.store.dispatch({
      type: dashboardActions.DASHBOARD_SET_FILES_QUERY_PARAMS,
      payload: queryParams
    });
  }

  onFilesQueryParamsOverride(queryParams: IFilesQueryParams): void {

    this.store.dispatch({
      type: dashboardActions.DASHBOARD_OVERRIDE_FILES_QUERY_PARAMS,
      payload: queryParams
    });
  }
}
