import { ChangeDetectionStrategy, Component } from '@angular/core';
import { collapseSidebar } from '../../../../helpers/sidebar.helper';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'sc-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: [ './sidebar.component.css' ]
})
export class SidebarComponent {

  closeIfMobile(): void {
    jQuery.removeOverlay();
    collapseSidebar();
  }
}
