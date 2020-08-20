import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IFile } from '../../../../models/file-filter';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-dashboard-recent-files',
  templateUrl: './recent-files.component.html',
  styleUrls: [ './recent-files.component.css' ]
})
export class RecentFilesComponent {

  @Input() recentFiles: IFile[];

  @Output() seeAllFiles = new EventEmitter<any>();
}
