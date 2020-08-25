import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IFilePercentage } from '../../../../helpers/file.helper';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'sc-dashboard-home-chart',
  templateUrl: './home-chart.component.html',
  styleUrls: [ './home-chart.component.css' ]
})
export class HomeChartComponent {

  chart;

  @Input() set filePercentages(data: IFilePercentage[]) {
    if (!data) {
      return;
    }

    const newData = data.filter((item, index) => index !== 0);

    const options = {
      chart: {
        width: 400,
        height: 200,
        type: 'pie',
      },
      colors: [ '#0062ff', '#fc5a5a', '#3dd598', '#a461d8', '#d4d5d8', '#FFC542' ],
      labels: [ ...newData.map(item => item.title) ],
      series: [ ...newData.map(item => item.percentage) ],
      dataLabels: {
        enabled: true,
        enabledOnSeries: true,
        formatter: (val, opts) => {
          return `${ val.toFixed(2) } %`;
        },
      },
      responsive: [ {
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

    if (!this.chart) {

      const chart = new ApexCharts(
        document.querySelector('#apex_chart_stats'),
        options
      );

      chart.render().then(() => this.chart = chart);
    } else {
      this.chart.updateOptions(options);
    }
  }
}
