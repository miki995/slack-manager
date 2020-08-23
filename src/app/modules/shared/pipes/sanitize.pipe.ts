import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sanitize'
})
export class SanitizePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
