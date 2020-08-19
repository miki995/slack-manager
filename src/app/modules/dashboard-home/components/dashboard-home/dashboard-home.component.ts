import { AfterViewInit, Component, OnInit } from '@angular/core';
import { fileTypes, IFilePercentages } from '../../../../helpers/file.helper';
import { select, Store } from '@ngrx/store';
import { getDashboardState, IDashboardState } from '../../../dashboard/store';
import * as dashboardActions from '../../../dashboard/store/dashboard/dashboard.actions';
import { Observable } from 'rxjs';
import { distinctUntilChanged, pluck } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: [ './dashboard-home.component.css' ]
})
export class DashboardHomeComponent implements OnInit, AfterViewInit {

  filePercentages$: Observable<IFilePercentages>;

  constructor(private readonly store: Store<IDashboardState>) {
  }

  openSlackPricing(): void {
    window.open(
      'https://slack.com/pricing',
      '_blank' // <- This is what makes it open in a new window.
    );
  }

  ngOnInit(): void {
    this.store.dispatch({
      type: dashboardActions.DASHBOARD_GET_ALL_FILES
    });

    this.filePercentages$ = this.store.pipe(select(getDashboardState), pluck('filePercentages'), distinctUntilChanged<IFilePercentages>());
  }

  ngAfterViewInit(): void {
    this.createChart();
  }

  createChart(): void {
    const options = {
      chart: {
        width: 400,
        type: 'pie',
      },
      labels: fileTypes.map(item => item.title),
      series: [ 44, 55, 13, 43, 10, 5, 1 ],
      responsive: [ {
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      } ]
    };

    const chart = new ApexCharts(
      document.querySelector('#apex_chart_stats'),
      options
    );

    chart.render();
  }
}
