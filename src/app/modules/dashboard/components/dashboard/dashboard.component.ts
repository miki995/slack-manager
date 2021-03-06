import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as dashboardActions from '../../store/dashboard/dashboard.actions';
import { select, Store } from '@ngrx/store';
import { getDashboardState, IDashboardState } from '../../store';
import { distinctUntilChanged, pluck } from 'rxjs/operators';
import { IFilePercentage } from '../../../../helpers/file.helper';
import { Observable } from 'rxjs';
import { SLACK_MANAGER_THEME, SLACK_MANAGER_TOKEN } from '../../../../helpers/token.helper';
import { IUserProfile } from '../../../../models/user';
import { IFile } from '../../../../models/file-filter';

@Component({
  selector: 'sc-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  filePercentages$: Observable<IFilePercentage[]>;
  filesLoading$: Observable<boolean>;
  usedStorage$: Observable<number>;
  maxStorage$: Observable<number>;
  usedStoragePercentage$: Observable<number>;
  profile$: Observable<IUserProfile>;
  profileLoading$: Observable<boolean>;
  fileDetail$: Observable<IFile>;
  fileDetailLoading$: Observable<boolean>;
  searchedFiles$: Observable<IFile[]>;
  searchingFiles$: Observable<boolean>;

  constructor(
    private readonly router: Router,
    private readonly store: Store<IDashboardState>) {
  }

  ngOnInit(): void {

    this.setTheme(false);
    this.setInitialState();

    this.filePercentages$ = this.store.pipe(select(getDashboardState), pluck('filePercentages'), distinctUntilChanged<IFilePercentage[]>());
    this.usedStorage$ = this.store.pipe(select(getDashboardState), pluck('usedStorage'), distinctUntilChanged<number>());
    this.maxStorage$ = this.store.pipe(select(getDashboardState), pluck('maxStorage'), distinctUntilChanged<number>());
    this.usedStoragePercentage$ = this.store.pipe(select(getDashboardState), pluck('usedStoragePercentage'), distinctUntilChanged<number>());
    this.profile$ = this.store.pipe(select(getDashboardState), pluck('profile'), distinctUntilChanged<IUserProfile>());
    this.profileLoading$ = this.store.pipe(select(getDashboardState), pluck('profileLoading'), distinctUntilChanged<boolean>());
    this.filesLoading$ = this.store.pipe(select(getDashboardState), pluck('filesLoading'), distinctUntilChanged<boolean>());
    this.fileDetail$ = this.store.pipe(select(getDashboardState), pluck('fileDetail'), distinctUntilChanged<IFile>());
    this.fileDetailLoading$ = this.store.pipe(select(getDashboardState), pluck('fileDetailLoading'), distinctUntilChanged<boolean>());
    this.searchedFiles$ = this.store.pipe(select(getDashboardState), pluck('searchedFiles'), distinctUntilChanged<IFile[]>());
    this.searchingFiles$ = this.store.pipe(select(getDashboardState), pluck('searchingFiles'), distinctUntilChanged<boolean>());

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

  signOut(): void {
    localStorage.setItem(SLACK_MANAGER_TOKEN, undefined);
    this.router.navigateByUrl('/');

    setTimeout(() => {
      jQuery('.overlay.show').removeClass('show');
      jQuery('.html').click();
    }, 10);
  }

  setTheme(change?: boolean): void {

    const value = localStorage.getItem(SLACK_MANAGER_THEME);
    const shouldTakeNewValue = value === 'light' ? 'dark' : 'light';
    const newValue = change ? shouldTakeNewValue : value ? value : 'light';

    localStorage.setItem(SLACK_MANAGER_THEME, newValue.toString());
    if (newValue === 'light') {
      jQuery('body').removeClass('dark');
    } else {
      jQuery('body').addClass('dark');
    }
  }

  searchFiles(query: string): void {
    this.store.dispatch({
      type: dashboardActions.DASHBOARD_SEARCH_FILES,
      payload: query
    });
  }

  deleteFile(file: string): void {

    this.store.dispatch({
      type: dashboardActions.DASHBOARD_DELETE_FILE,
      payload: file
    });
  }
}
