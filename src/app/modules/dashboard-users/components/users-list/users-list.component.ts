import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IUser } from '../../../../models/user';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-dashboard-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: [ './users-list.component.css' ]
})
export class UsersListComponent {

  @Input() title: string;
  @Input() users: IUser[];
}
