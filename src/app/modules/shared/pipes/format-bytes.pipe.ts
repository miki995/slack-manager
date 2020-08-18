import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatBytes'
})
export class FormatBytesPipe implements PipeTransform {

  transform(value: number, fixed?: number): string {

    if (0 === value) {
      return '0 Bytes';
    }

    const c = 1024;
    const d = fixed || 2;
    const e = [ 'Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB' ];
    const f = Math.floor(Math.log(value) / Math.log(c));
    return `${ parseFloat((value / Math.pow(c, f)).toFixed(d)) } ${ e[f] }`;
  }
}
