import { Directive, Input, HostListener, ElementRef } from '@angular/core';


@Directive({ selector: '[hoverClass]' })
export class HoverClassDirective {
  @Input()
  hoverClass: string;

  constructor(
    public elementRef: ElementRef,
  ) { }

  @HostListener('mouseover') mouseover() {
    if(this.hoverClass !== '') {
      this.elementRef.nativeElement.classList.add(this.hoverClass);
    }
  }

  @HostListener('mouseout') mouseout() {
    if(this.hoverClass !== '') {
      this.elementRef.nativeElement.classList.remove(this.hoverClass);
    }
  }
}
