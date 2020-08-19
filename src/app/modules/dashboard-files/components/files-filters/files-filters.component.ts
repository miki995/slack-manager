import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { EFileTypeValue, fileTypes } from '../../../../helpers/file.helper';
import * as moment from 'moment';
import { EFilesSortBySize, IFilesQueryParams } from '../../../../models/file-filter';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-dashboard-files-filters',
  templateUrl: './files-filters.component.html',
  styleUrls: [ './files-filters.component.css' ]
})
export class FilesFiltersComponent implements AfterViewInit {

  fileTypes = fileTypes;
  filesSortBySizeEnum = EFilesSortBySize;
  fileTypeEnum = EFileTypeValue;

  @Input() filesQueryParams: IFilesQueryParams;
  @Input() channels: any[];

  @Output() filesQueryParamsChange = new EventEmitter<IFilesQueryParams>();
  @Output() filesQueryParamsOverride = new EventEmitter<IFilesQueryParams>();

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
    const allSelected = [EFileTypeValue.all];
    const othersSelected =  Array.from(new Set([ ...oldTypes, fileType ].filter(item => item !== EFileTypeValue.all)));
    const finalSelected = shouldClearType ? othersSelected.filter(item => item !== fileType) : othersSelected;
    const finalSelectedNonEmpty = finalSelected?.length ? finalSelected : allSelected;
    const types = isAll ? allSelected : finalSelectedNonEmpty;

    this.filesQueryParamsChange.emit({ types });
  }
}
