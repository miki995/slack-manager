import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'sc-dashboard-files-pagination',
  templateUrl: './files-pagination.component.html',
  styleUrls: [ './files-pagination.component.css' ]
})
export class FilesPaginationComponent {

  @Input() page: number;
  @Input() count: number;
  @Input() total: number;

  @Output() pageChange = new EventEmitter<number>();
}
