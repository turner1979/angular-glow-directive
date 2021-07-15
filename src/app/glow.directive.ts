import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[glow]',
})
export class GlowDirective {
  constructor(private el: ElementRef) {}

  @Input() glow = '';
  @Input() defaultColour = '#ec8bff';

  @HostListener('mouseenter') onMouseEnter() {
    this.setGlow(`0px 0px 24px 8px ${this.glow || this.defaultColour}`);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setGlow('');
  }

  private setGlow(boxShadow: string) {
    this.el.nativeElement.style.boxShadow = boxShadow;
  }
}
