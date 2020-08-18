import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getDashboardState, IDashboardState } from '../../../dashboard/store';
import { EFilesCount, EFilesFilter, IFilesQueryParams, IFilesResponse } from '../../../../models/file-filter';
import * as dashboardActions from '../../../dashboard/store/dashboard/dashboard.actions';
import { Observable } from 'rxjs';
import { distinctUntilChanged, pluck } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard-files',
  templateUrl: './dashboard-files.component.html',
  styleUrls: [ './dashboard-files.component.css' ]
})
export class DashboardFilesComponent implements OnInit {

  filesFilter$: Observable<EFilesFilter>;
  filesResponse$: Observable<IFilesResponse>;
  filesQueryParams$: Observable<IFilesQueryParams>;

  constructor(private readonly store: Store<IDashboardState>) {
  }

  filesFilterChange(data: EFilesFilter): void {

    this.store.dispatch({
      type: dashboardActions.DASHBOARD_SET_FILES_FILTER,
      payload: data
    });
  }

  ngOnInit(): void {

    this.setInitialState();
    this.getFiles();

    this.filesFilter$ = this.store.pipe(select(getDashboardState), pluck('filesFilter'), distinctUntilChanged<EFilesFilter>());
    this.filesResponse$ = this.store.pipe(select(getDashboardState), pluck('filesResponse'), distinctUntilChanged<IFilesResponse>());
    this.filesQueryParams$ = this.store.pipe(select(getDashboardState), pluck('filesQueryParams'), distinctUntilChanged<IFilesQueryParams>());
  }

  getFiles(): void {
    this.store.dispatch({
      type: dashboardActions.DASHBOARD_GET_FILES
    });
  }

  setInitialState(): void {

    this.store.dispatch({
      type: dashboardActions.DASHBOARD_SET_INITIAL_STATE
    });
  }

  countChanged(count: EFilesCount): void {

    this.store.dispatch({
      type: dashboardActions.DASHBOARD_SET_FILES_QUERY_PARAMS,
      payload: { count }
    });
  }
}
