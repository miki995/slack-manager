import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IFilePercentage } from '../../../../helpers/file.helper';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'sc-dashboard-home-quick-access',
  templateUrl: './quick-access.component.html',
  styleUrls: [ './quick-access.component.css' ]
})
export class QuickAccessComponent {

  @Input() filePercentages: IFilePercentage[];

  @Output() setFileType = new EventEmitter<string>();
}
