import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSilver]',
})
export class SilverDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.background = '#ADAAAB';
  }
}
