import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IFile } from '../../../../models/file-filter';
import { IUser } from '../../../../models/user';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'sc-dashboard-recent-files',
  templateUrl: './recent-files.component.html',
  styleUrls: [ './recent-files.component.css' ]
})
export class RecentFilesComponent {

  @Input() recentFiles: IFile[];
  @Input() users: IUser[];

  @Output() seeAllFiles = new EventEmitter<any>();
}
