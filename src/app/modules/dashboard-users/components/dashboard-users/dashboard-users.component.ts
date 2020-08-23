import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getDashboardState, IDashboardState } from '../../../dashboard/store';
import * as dashboardActions from '../../../dashboard/store/dashboard/dashboard.actions';
import { Observable } from 'rxjs';
import { IUsersResponse } from '../../../../models/user';
import { distinctUntilChanged, pluck } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard-users',
  templateUrl: './dashboard-users.component.html',
  styleUrls: [ './dashboard-users.component.css' ]
})
export class DashboardUsersComponent implements OnInit {

  usersResponse$: Observable<IUsersResponse>;

  constructor(
    private readonly store: Store<IDashboardState>,
  ) {
  }

  ngOnInit(): void {
    this.usersResponse$ = this.store.pipe(select(getDashboardState), pluck('usersResponse'), distinctUntilChanged<IUsersResponse>());
  }
}
