import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: [ './dashboard-home.component.css' ]
})
export class DashboardHomeComponent {


  openSlackPricing(): void {
    window.open(
      'https://slack.com/pricing',
      '_blank' // <- This is what makes it open in a new window.
    );
  }
}
