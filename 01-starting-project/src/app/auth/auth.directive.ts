import { Directive, effect, inject, input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Permission } from './auth.model';
import { AuthService } from './auth.service';
import { LogDirective } from '../log.directive';

@Directive({
  selector: '[appAuth]',
  standalone: true,
  hostDirectives:[LogDirective]
})
export class AuthDirective {

  userType = input.required<Permission>({alias: 'appAuth'});

  private authService = inject(AuthService) ; 
  private templateRef  = inject(TemplateRef); // for struct directive
  private viewContainerRef  = inject(ViewContainerRef);



  constructor() { 

    effect(()=>{
if(this.authService.activePermission() === this.userType()){
  // console.log('SHOW ELEMENT ');

  this.viewContainerRef.createEmbeddedView(this.templateRef);

}else {
    // console.log('DO NOT SHOW ELEMENT');
    
    this.viewContainerRef.clear()
}

    })
  }

}
