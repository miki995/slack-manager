import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-dashboard-files-list-info',
  templateUrl: './files-list-info.component.html',
  styleUrls: [ './files-list-info.component.css' ]
})
export class FilesListInfoComponent {

  @Input() count: number;
  @Input() total: number;
  @Input() page: number;
}
