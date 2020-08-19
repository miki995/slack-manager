import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { fileTypes } from '../../../../helpers/file.helper';
import * as moment from 'moment';
import { EFilesSortByDate, IFilesQueryParams } from '../../../../models/file-filter';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-dashboard-files-filters',
  templateUrl: './files-filters.component.html',
  styleUrls: [ './files-filters.component.css' ]
})
export class FilesFiltersComponent implements AfterViewInit {

  fileTypes = fileTypes;
  filesSortByDateEnum = EFilesSortByDate;

  @Input() filesQueryParams: IFilesQueryParams;
  @Input() channels: any[];

  @Output() filesQueryParamsChange = new EventEmitter<IFilesQueryParams>();

  ngAfterViewInit(): void {
    this.initDateRangePicker();
  }

  initDateRangePicker(): void {
    jQuery('input[name="daterangepicker-file-filter"]').daterangepicker({
      opens: 'left',
      autoUpdateInput: false,
    }, (start, end, label) => {
      const startUnix = moment(start).unix();
      const endUnix = moment(end).unix();

      jQuery('input[name ="daterangepicker-file-filter"]').val(start.format('MM/DD/YYYY') + '-' + end.format('MM/DD/YYYY'));
    });
  }
}
