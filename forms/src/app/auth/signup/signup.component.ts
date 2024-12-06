import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounce, debounceTime, first, from } from 'rxjs';

// function equalValues(control: AbstractControl){
//   const password = control.get('password')?.value;
//   const confirmPassword = control.get('confirmPassword')?.value;
//   if(password===confirmPassword){
//     return null;
//   }
//   return {passwordsNotEqual: true}
// }


//this is factory function  
function equalValues(controlName1: string , controlName2: string ){
 return (control: AbstractControl)=>{
  const val1= control.get(controlName1)?.value;
  const val2= control.get(controlName2)?.value;
  if(val1===val2){
    return null;
  }
  return {valuesNotEqual: true}
 }
  
}

@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  imports:[ReactiveFormsModule]
})
export class SignupComponent  implements OnInit{
  private destroyRef = inject(DestroyRef)
  form = new FormGroup({
    email: new FormControl('',
      {
        validators: [
          Validators.email , 
          Validators.required,
        ]
      }
    ),
    passwords : new FormGroup({
        password : new FormControl('',{
      validators: [
        Validators.required, 
        Validators.minLength(6),
        ]
    }),
    confirmPassword : new FormControl('',{
      validators: [
        Validators.required, 
        Validators.minLength(6),
        ]
    }),
    },{
validators: [
  // equalValues,
  equalValues('password','confirmPassword')
]
    }),
  
    firstName: new FormControl('',
      {
        validators: [
          Validators.required,  
        ]
      }
    ),
    lastName: new FormControl('',
      {
        validators: [
          Validators.required,   
        ]
      }
    ),
    address:new FormGroup({
      street: new FormControl('',
        {
          validators: [
            Validators.required,   
          ]
        }
      ),
      number: new FormControl('',
        {
          validators: [
            Validators.required,   
          ]
        }
      ),
      postalCode: new FormControl('',
        {
          validators: [
            Validators.required,   
          ]
        }
      ),
      city: new FormControl('',
        {
          validators: [
            Validators.required,   
          ]
        }
      ),
    }),
    
    role: new FormControl<
    'student' | 'teacher' | 'employee'
    | 'founder' | 'other' >('student',
      {
        validators: [
          Validators.required,   
        ]
      }
    ),
    agree: new FormControl(false,{
      validators: [
        Validators.required,   
      ]
    }),
    source: new FormArray([
      new FormControl(false),
      new FormControl(false),
      new FormControl(false)
    ])
  })

  get emailIsInvalid(){
    return(
      this.form.controls.email.touched &&
      this.form.controls.email.dirty &&
      this.form.controls.email.invalid 
    )
  }

  get passwordIsInvalid(){
    return(false
      // this.form.controls.password.touched &&
      // this.form.controls.password.dirty &&
      // this.form.controls.password.invalid 
    )
  }

  get IsSubmitPossible(){
    return ((true
      // this.form.controls.password.valid  &&this.form.controls.password.valid 
    ));
  }
  onSubmit(){ 

    console.log(this.form);
    // const enretedEmail = this.form.value.email ; 
    // const enretedPassword = this.form.value.password ; 
    // console.log(enretedEmail,enretedPassword);
    // this.form.reset();
    }
    ngOnInit(): void {
const loadedForm = window.localStorage.getItem('saved-form-email') ; 
if(loadedForm){
const savedEmail = JSON.parse(loadedForm).email;
this.form.patchValue({
  email: savedEmail ,
})
}

      const subscribe = 
      this.form.valueChanges
      .pipe(debounceTime(500))
      .subscribe({
        next: (value)=>{
          const emailToStore = value.email  ; 
          window.localStorage.setItem(
            'saved-form-email',
            JSON.stringify({email: emailToStore})
          )
        }
      })
this.destroyRef.onDestroy(()=> subscribe.unsubscribe());
    }

}