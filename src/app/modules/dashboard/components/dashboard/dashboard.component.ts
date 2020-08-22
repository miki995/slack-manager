import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as dashboardActions from '../../store/dashboard/dashboard.actions';
import { select, Store } from '@ngrx/store';
import { getDashboardState, IDashboardState } from '../../store';
import { distinctUntilChanged, pluck } from 'rxjs/operators';
import { IFilePercentage } from '../../../../helpers/file.helper';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  filePercentages$: Observable<IFilePercentage[]>;
  usedStorage$: Observable<number>;
  maxStorage$: Observable<number>;

  constructor(
    private readonly router: Router,
    private readonly store: Store<IDashboardState>) {
  }

  ngOnInit(): void {

    this.setInitialState();

    this.filePercentages$ = this.store.pipe(select(getDashboardState), pluck('filePercentages'), distinctUntilChanged<IFilePercentage[]>());
    this.usedStorage$ = this.store.pipe(select(getDashboardState), pluck('usedStorage'), distinctUntilChanged<number>());
    this.maxStorage$ = this.store.pipe(select(getDashboardState), pluck('maxStorage'), distinctUntilChanged<number>());

    if (this.router.url !== '/dashboard') {
      return;
    }

    this.router.navigateByUrl('/dashboard/home');
 }

  setInitialState(): void {
    this.store.dispatch({
      type: dashboardActions.DASHBOARD_SET_INITIAL_STATE
    });
  }
}
