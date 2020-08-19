import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { fileTypes, IFilePercentages } from '../../../../helpers/file.helper';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-dashboard-home-chart',
  templateUrl: './home-chart.component.html',
  styleUrls: [ './home-chart.component.css' ]
})
export class HomeChartComponent {

  @Input() set filePercentages(data: IFilePercentages) {
    const options = {
      chart: {
        width: 400,
        type: 'pie',
      },
      labels: fileTypes.map(item => item.title),
      series: [ 20, 20, 20, 20, 20, 20, 20 ],
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
