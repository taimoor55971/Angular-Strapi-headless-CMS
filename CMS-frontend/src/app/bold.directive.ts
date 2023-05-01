import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBold]'
})
export class BoldDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.fontWeight = 'bold';
   }

}
