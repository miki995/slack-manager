import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IFile } from '../../../../../models/file-filter';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'sc-sidebar-file-info',
  templateUrl: './sidebar-file-info.component.html',
  styleUrls: [ './sidebar-file-info.component.css' ]
})
export class SidebarFileInfoComponent {

  @Input() fileDetailLoading: boolean;
  @Input() fileDetail: IFile;
}
