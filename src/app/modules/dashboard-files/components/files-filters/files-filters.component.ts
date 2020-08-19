import { AfterViewInit, ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { fileTypes } from '../../../../helpers/file.helper';
import * as moment from 'moment';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-dashboard-files-filters',
  templateUrl: './files-filters.component.html',
  styleUrls: [ './files-filters.component.css' ]
})
export class FilesFiltersComponent implements AfterViewInit {

  fileTypes = fileTypes;

  @Input() channels: any[];

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
