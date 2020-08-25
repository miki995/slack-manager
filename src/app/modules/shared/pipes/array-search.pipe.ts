import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arraySearch'
})
export class ArraySearchPipe implements PipeTransform {

  transform<T>(array: T[], column: string, search: string): T[] {
    array = array || [];

    if (array.length === 0 || (typeof column === 'undefined') || !search) {
      return array;
    }

    return array
      .filter((item) => {
        if (item.hasOwnProperty(column)) {
          return item[column].toString().toLowerCase().search(search.toLowerCase().trim()) >= 0;
        }
      });
  }
}
