import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { IFilePercentage } from '../../../../helpers/file.helper';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-sidebar-right',
  templateUrl: './sidebar-right.component.html',
  styleUrls: [ './sidebar-right.component.css' ]
})
export class SidebarRightComponent {

  @Input() usedStoragePercentage: number;
  @Input() filePercentages: IFilePercentage[];
}
