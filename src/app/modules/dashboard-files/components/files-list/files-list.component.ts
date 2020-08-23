import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { EFilesSortByDate, IFile, IFilesQueryParams } from '../../../../models/file-filter';
import { IUser } from '../../../../models/user';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-dashboard-files-list',
  templateUrl: './files-list.component.html',
  styleUrls: [ './files-list.component.css' ]
})
export class FilesListComponent {

  filesSortByDateEnum = EFilesSortByDate;

  @Input() files: IFile[];
  @Input() filesQueryParams: IFilesQueryParams;
  @Input() users: IUser[];
  @Input() loading: boolean;

  @Output() filesQueryParamsChange = new EventEmitter<IFilesQueryParams>();


  onDateChange(isNewest: boolean): void {

    const date = isNewest ? EFilesSortByDate.oldest : EFilesSortByDate.newest;
    const queryParams: IFilesQueryParams = {
      size: null,
      date
    };

    this.filesQueryParamsChange.emit(queryParams);
  }
}
