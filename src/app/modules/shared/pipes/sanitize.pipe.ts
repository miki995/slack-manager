import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'sanitize'
})
export class SanitizePipe implements PipeTransform {

  constructor(private readonly domSanitizer: DomSanitizer) {
  }

  transform(value: string, prop: string): unknown {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(`${prop}:${value}`);
  }
}
