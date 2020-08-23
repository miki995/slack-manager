import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IFilePercentage } from '../../../../helpers/file.helper';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'sc-sidebar-right',
  templateUrl: './sidebar-right.component.html',
  styleUrls: [ './sidebar-right.component.css' ]
})
export class SidebarRightComponent {

  @Input() usedStoragePercentage: number;
  @Input() filePercentages: IFilePercentage[];
  @Input() filesLoading: boolean;

}
