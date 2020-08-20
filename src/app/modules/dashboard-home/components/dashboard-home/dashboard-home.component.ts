import { Component, OnInit } from '@angular/core';
import { EFileTypeValue, IFilePercentage } from '../../../../helpers/file.helper';
import { select, Store } from '@ngrx/store';
import { getDashboardState, IDashboardState } from '../../../dashboard/store';
import * as dashboardActions from '../../../dashboard/store/dashboard/dashboard.actions';
import { Observable } from 'rxjs';
import { distinctUntilChanged, pluck } from 'rxjs/operators';
import { Router } from '@angular/router';
import { IFile } from '../../../../models/file-filter';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: [ './dashboard-home.component.css' ]
})
export class DashboardHomeComponent implements OnInit {

  filePercentages$: Observable<IFilePercentage[]>;
  recentFiles$: Observable<IFile[]>;

  constructor(
    private readonly store: Store<IDashboardState>,
    private readonly router: Router
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch({
      type: dashboardActions.DASHBOARD_GET_ALL_FILES
    });

    this.filePercentages$ = this.store.pipe(select(getDashboardState), pluck('filePercentages'), distinctUntilChanged<IFilePercentage[]>());
    this.recentFiles$ = this.store.pipe(select(getDashboardState), pluck('recentFiles'), distinctUntilChanged<IFile[]>());
  }

  setFileType(fileType: string): void {
    const fileTypeForPayload = this.getFile(fileType);

    this.store.dispatch({
      type: dashboardActions.DASHBOARD_SET_FILES_QUERY_PARAMS,
      payload: { types: [ fileTypeForPayload ] }
    });

    this.router.navigateByUrl('/dashboard/files');
  }

  getFile(fileType: string): string {

    switch (fileType) {

      case 'Images':
        return EFileTypeValue.images;

      case 'Notes':
        return EFileTypeValue.snippets;

      case 'Files':
        return EFileTypeValue.zips;

      case 'Excels':
        return EFileTypeValue.gdocs;

      case 'Videos':
        return EFileTypeValue.images;

      case 'Presentations':
        return EFileTypeValue.gdocs;

      default:
        return EFileTypeValue.all;
    }
  }
}
