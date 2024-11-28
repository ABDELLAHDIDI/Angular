import { Directive, ElementRef, inject, input } from "@angular/core";
import { LogDirective } from "./log.directive";

@Directive({
    selector: 'a[appSafeLink]',
    standalone: true ,
    host: {
        '(click)' : 'onConfirmLeavePage($event)'
    },
    hostDirectives:[LogDirective]
})
export class SafeLinkDirective{

queryParam = input('myapp' , {alias: 'appSafeLink'});

private hostElmtRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef) ; 

constructor() {
console.log('SafeLinkDirective is acitve !');
}

onConfirmLeavePage(event  : MouseEvent){
   const wantsToleave =  window.confirm('Do you want to leave the page ? ')

   if(wantsToleave) {
    // const address = (event.target as HTMLAnchorElement).href;
    // (event.target as HTMLAnchorElement).href = address + '?from='+this.queryParam();
    const address = this.hostElmtRef.nativeElement.href;
    this.hostElmtRef.nativeElement.href = address + '?from='+this.queryParam();
    
    return;
   }
   event.preventDefault();
}
}