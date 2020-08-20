import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-dashboard-home-upgrade',
  templateUrl: './upgrade.component.html',
  styleUrls: [ './upgrade.component.css' ]
})
export class UpgradeComponent {

  openSlackPricing(): void {
    window.open(
      'https://slack.com/pricing',
      '_blank' // <- This is what makes it open in a new window.
    );
  }
}
