import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IFilePercentage } from '../../../../helpers/file.helper';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-sidebar-right',
  templateUrl: './sidebar-right.component.html',
  styleUrls: [ './sidebar-right.component.css' ]
})
export class SidebarRightComponent {

  @Input() maxStorage: number;
  @Input() usedStorage: number;
  @Input() filePercentages: IFilePercentage[];
}
