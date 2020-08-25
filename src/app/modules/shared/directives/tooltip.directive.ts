import { AfterViewInit, Directive, ElementRef, HostListener, OnDestroy } from '@angular/core';

@Directive({
  selector: '[scTooltip]'
})
export class TooltipDirective implements AfterViewInit, OnDestroy {

  @HostListener('mouseleave', ['$event']) onLeave( e: MouseEvent ): void {
    jQuery('[data-toggle="tooltip"]').tooltip('hide'); // close all tooltips
  }

  constructor(
    private readonly elementRef: ElementRef,
  ) {
  }

  ngAfterViewInit(): void {
    jQuery(this.elementRef.nativeElement).tooltip();
  }

  ngOnDestroy(): void {
    jQuery('[data-toggle="tooltip"]').tooltip('hide'); // close all tooltips
  }
}
