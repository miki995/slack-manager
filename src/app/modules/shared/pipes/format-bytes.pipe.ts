import { Pipe, PipeTransform } from '@angular/core';
import { formatBytes } from '../../../helpers/file.helper';

@Pipe({
  name: 'formatBytes'
})
export class FormatBytesPipe implements PipeTransform {

  transform(value: number, fixed?: number): string {

   return formatBytes(value, fixed);
  }
}
