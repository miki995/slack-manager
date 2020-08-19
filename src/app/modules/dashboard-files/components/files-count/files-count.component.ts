import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { EFilesCount } from '../../../../models/file-filter';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-dashboard-files-count',
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
  ];

  @Input() selectedCount: EFilesCount;

  @Output() changedCount = new EventEmitter<EFilesCount>();
}