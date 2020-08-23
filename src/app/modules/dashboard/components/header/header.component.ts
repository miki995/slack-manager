import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IUserProfile } from '../../../../models/user';

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

  @Output() signOut = new EventEmitter<any>();
}
