import { ChangeDetectionStrategy, Component } from '@angular/core';
import { openSlackPricing } from '../../../../helpers/slack.helper';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'sc-dashboard-home-upgrade',
  templateUrl: './upgrade.component.html',
  styleUrls: [ './upgrade.component.css' ]
})
export class UpgradeComponent {

  openSlackPricing(): void {
   openSlackPricing();
  }
}
