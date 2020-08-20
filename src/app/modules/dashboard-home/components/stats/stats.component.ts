import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IFilePercentage } from '../../../../helpers/file.helper';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-dashboard-home-stats',
  templateUrl: './stats.component.html',
  styleUrls: [ './stats.component.css' ]
})
export class StatsComponent {

  @Input() filePercentages: IFilePercentage[];
}
