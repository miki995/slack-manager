import { Pipe, PipeTransform } from '@angular/core';
import { detectFileType, IFileType } from '../../../helpers/file.helper';

@Pipe({
  name: 'fileType'
})
export class FileTypePipe implements PipeTransform {

  transform(value: string): IFileType {

    return detectFileType(value);
  }
}
