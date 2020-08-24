import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'sc-file-actions',
  templateUrl: './file-actions.component.html',
  styleUrls: [ './file-actions.component.css' ]
})
export class FileActionsComponent {

  @Input() selectedFilesForDelete: string[];
  @Input() filesDeleting: boolean;

  @Output() startBulkDeleteSelected = new EventEmitter<string[]>();
  @Output() stopBulkDeleteSelected = new EventEmitter<string[]>();
}
