import { afterNextRender, Component, DestroyRef, inject, viewChild } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { debounce, debounceTime } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login-template-driven-Forms.component.html',
  styleUrl: './login.component.css',
  imports:[FormsModule]
})
export class LoginTemplateDrivenFormComponent {

private form = viewChild.required<NgForm>('form');
private email = viewChild.required<NgModel>('email');
private destroyRef = inject(DestroyRef)

constructor(){
  afterNextRender(()=>{
// populate the form by entring email 

const savedFrom = window.localStorage.getItem('saved-login-form');

if(savedFrom){
const loadedFormData = JSON.parse(savedFrom);
const savedEmail = loadedFormData.email;
// this.form().setValue({
//   email : savedEmail,
//   password: ''
// });

setTimeout(()=>{
  this.form().controls['email'].setValue( savedEmail );
},1)

//not working 
// this.email().control.setValue(savedEmail);
}
    // save the enreted email 
 const subscritpion =    
  this.form().valueChanges?.
  pipe(debounceTime(500)).
  subscribe({
      // next: (value) =>  console.log(value.email),
      next: (value) =>  
        window.localStorage.setItem(
          'saved-login-form',
          JSON.stringify({email: value.email})
        )
        ,

    });
this.destroyRef.onDestroy(()=> subscritpion?.unsubscribe() )
  })
}
  onSubmit(formData: NgForm){
    if(formData.form.invalid){
      return
    }
// console.log(formData);
const enterdEmail = formData.form.value.email; 
const enterdPassword = formData.form.value.password; 
console.log(formData);

console.log(enterdEmail,enterdPassword);

formData.form.reset();
  }
}
