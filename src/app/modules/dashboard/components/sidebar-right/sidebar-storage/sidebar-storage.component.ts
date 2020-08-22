import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IFilePercentage } from '../../../../../helpers/file.helper';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-sidebar-storage',
  templateUrl: './sidebar-storage.component.html',
  styleUrls: [ './sidebar-storage.component.css' ]
})
export class SidebarStorageComponent {

  @Input() filePercentages: IFilePercentage[];

  @Input() set storagePercentageData(data: { value: number, max: number }) {

    if (!data.value || !data.max) {
      return;
    }
  }
}

