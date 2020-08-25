import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'timeAgoPipe'
})
export class TimeAgoPipePipe implements PipeTransform {

  transform(value: string): string {
    return moment.unix(Number(value)).fromNow();
  }
}
