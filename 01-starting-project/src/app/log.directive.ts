import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appLog]',
  standalone: true,
  host:{
    '(click)' : 'onLog()'
  }
})
export class LogDirective {

  private elmt = inject(ElementRef)
  constructor() { }

  onLog(){
    console.log('CLICKED');
    console.log(this.elmt.nativeElement);
    
  }

}
