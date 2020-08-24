import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IUserProfile } from '../../../../models/user';
import { IFile } from '../../../../models/file-filter';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'sc-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.css' ]
})
export class HeaderComponent {

  @Input() profile: IUserProfile;
  @Input() usedStoragePercentage: number;
  @Input() profileLoading: boolean;
  @Input() searchedFiles: IFile[];
  @Input() searchingFiles: boolean;

  @Output() signOut = new EventEmitter<any>();
  @Output() changeTheme = new EventEmitter<boolean>();
  @Output() searchTermChange = new EventEmitter<string>();
}
