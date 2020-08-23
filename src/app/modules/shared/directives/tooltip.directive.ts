import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[scTooltip]'
})
export class TooltipDirective implements AfterViewInit {

  constructor(
    private readonly elementRef: ElementRef,
  ) {
  }

  ngAfterViewInit(): void {
    jQuery(this.elementRef.nativeElement).tooltip();
  }
}
