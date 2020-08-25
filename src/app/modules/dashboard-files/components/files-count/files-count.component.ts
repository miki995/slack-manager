import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { EFilesCount } from '../../../../models/file-filter';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'sc-dashboard-files-count',
  templateUrl: './files-count.component.html',
  styleUrls: [ './files-count.component.css' ]
})
export class FilesCountComponent {

  filesCount = EFilesCount;

  filesCounts: EFilesCount[] = [
    EFilesCount.count10,
    EFilesCount.count25,
    EFilesCount.count50,
    EFilesCount.count100,
    EFilesCount.count999
  ];

  @Input() selectedCount: EFilesCount;
  @Input() filesDeleting: boolean;

  @Output() changedCount = new EventEmitter<EFilesCount>();
}
