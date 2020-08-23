import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'sc-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: [ './sidebar.component.css' ]
})
export class SidebarComponent {

  closeIfMobile(): void {
    jQuery.removeOverlay();
    jQuery('.navigation').removeClass('open');
    jQuery('.sidebar-group').removeClass('collapse');
    jQuery('.files-sidebar').removeClass('collapse');
    jQuery('.components-sidebar').removeClass('collapse');
  }
}
