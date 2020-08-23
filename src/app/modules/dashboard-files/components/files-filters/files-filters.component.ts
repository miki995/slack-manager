import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { EFileTypeValue, fileTypes } from '../../../../helpers/file.helper';
import * as moment from 'moment';
import { EFilesSortBySize, IFilesQueryParams } from '../../../../models/file-filter';
import { IChannel } from '../../../../models/conversation';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'sc-dashboard-files-filters',
  templateUrl: './files-filters.component.html',
  styleUrls: [ './files-filters.component.css' ]
})
export class FilesFiltersComponent implements AfterViewInit {

  fileTypes = fileTypes;
  filesSortBySizeEnum = EFilesSortBySize;
  fileTypeEnum = EFileTypeValue;

  @Input() filesQueryParams: IFilesQueryParams;
  @Input() channels: any[];

  @Input() set dates(data: IFilesQueryParams) {
    if (!data.ts_from && !data.ts_to) {
      jQuery('input[name ="daterangepicker-file-filter"]').val('Date range');
      return;
    }

    const start = moment(new Date(data.ts_from * 1000));
    const end = moment(new Date(data.ts_to * 1000));
    jQuery('input[name ="daterangepicker-file-filter"]').val(start.format('MM/DD/YYYY') + '-' + end.format('MM/DD/YYYY'));
  }

  @Output() filesQueryParamsChange = new EventEmitter<IFilesQueryParams>();
  @Output() filesQueryParamsOverride = new EventEmitter<IFilesQueryParams>();

  ngAfterViewInit(): void {
    this.initDateRangePicker();
  }

  initDateRangePicker(): void {
    jQuery('input[name="daterangepicker-file-filter"]').daterangepicker({
      opens: 'left',
      autoUpdateInput: false,
      maxDate: new Date()
    }, (start, end, label) => {
      // tslint:disable-next-line:variable-name
      const ts_from = moment(start).unix();
      // tslint:disable-next-line:variable-name
      const ts_to = moment(end).unix();
      this.filesQueryParamsChange.emit({ ts_from, ts_to });
    });
  }

  onSizeChange(isLargest: boolean): void {

    const size = isLargest ? EFilesSortBySize.smallest : EFilesSortBySize.largest;
    const queryParams: IFilesQueryParams = {
      size,
      date: null
    };

    this.filesQueryParamsOverride.emit(queryParams);
  }

  onFileTypeChange(fileType: EFileTypeValue, oldTypes: EFileTypeValue[]): void {

    const isAll = fileType === EFileTypeValue.all;
    const shouldClearType = isAll ? false : oldTypes?.includes(fileType);
    const allSelected = [ EFileTypeValue.all ];
    const othersSelected = Array.from(new Set([ ...oldTypes, fileType ].filter(item => item !== EFileTypeValue.all)));
    const finalSelected = shouldClearType ? othersSelected.filter(item => item !== fileType) : othersSelected;
    const finalSelectedNonEmpty = finalSelected?.length ? finalSelected : allSelected;
    const types = isAll ? allSelected : finalSelectedNonEmpty;

    this.filesQueryParamsChange.emit({ types });
  }
}
