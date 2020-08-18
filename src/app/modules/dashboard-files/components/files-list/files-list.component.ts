import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IFile } from '../../../../models/file-filter';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-dashboard-files-list',
  templateUrl: './files-list.component.html',
  styleUrls: [ './files-list.component.css' ]
})
export class FilesListComponent {

  @Input() files: IFile[];
}
