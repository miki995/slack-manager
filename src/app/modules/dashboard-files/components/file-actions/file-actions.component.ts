import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IFile } from '../../../../models/file-filter';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'sc-file-actions',
  templateUrl: './file-actions.component.html',
  styleUrls: [ './file-actions.component.css' ]
})
export class FileActionsComponent {

  @Input() selectedFilesForDelete: string[];
  @Input() filesDeleting: boolean;
  @Input() allFiles: IFile[];

  @Output() startBulkDeleteSelected = new EventEmitter<string[]>();
  @Output() startBulkDeleteAll = new EventEmitter<IFile[]>();
  @Output() stopBulkDeleteSelected = new EventEmitter<string[]>();
  @Output() downloadFiles = new EventEmitter<any>();
}
