import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { IFilePercentage } from '../../../../../helpers/file.helper';
import { openSlackPricing } from '../../../../../helpers/slack.helper';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'sc-sidebar-storage',
  templateUrl: './sidebar-storage.component.html',
  styleUrls: [ './sidebar-storage.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class SidebarStorageComponent {

  @Input() filePercentages: IFilePercentage[];
  @Input() filesLoading: number;
  @Input() value: number;

  openSlackPricing(): void {
    openSlackPricing();
  }
}

