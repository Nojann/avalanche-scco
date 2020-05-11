import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective {

  constructor(private el: ElementRef) {
    setTimeout(() => {

      this.el.nativeElement.focus();
      console.log("focus");
  }, 500);
    
   }

}
