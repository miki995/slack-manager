import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as dashboardActions from '../../store/dashboard/dashboard.actions';
import { Store } from '@ngrx/store';
import { IDashboardState } from '../../store';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  constructor(
    private readonly router: Router,
    private readonly store: Store<IDashboardState>) {
  }

  ngOnInit(): void {
    if (this.router.url !== '/dashboard') {
      return;
    }

    this.router.navigateByUrl('/dashboard/home');
    this.setInitialState();
  }

  setInitialState(): void {

    this.store.dispatch({
      type: dashboardActions.DASHBOARD_SET_INITIAL_STATE
    });
  }
}
