import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getDashboardState, IDashboardState } from '../../../dashboard/store';
import { EFilesFilter } from '../../../../models/file-filter';
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

  constructor(private readonly store: Store<IDashboardState>) {
  }

  filesFilterChange(data: EFilesFilter): void {

    this.store.dispatch({
      type: dashboardActions.DASHBOARD_SET_FILES_FILTER,
      payload: data
    });
  }

  ngOnInit(): void {
    this.filesFilter$ = this.store.pipe(select(getDashboardState), pluck('filesFilter'), distinctUntilChanged<EFilesFilter>());
  }
}
