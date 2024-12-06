import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounce, debounceTime, first, from } from 'rxjs';

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
    // passwords : new FormGroup({
    //     password : new FormControl('',{
    //   validators: [
    //     Validators.required, 
    //     Validators.minLength(6),
    //     ]
    // }),
    // confirmPassword : new FormControl('',{
    //   validators: [
    //     Validators.required, 
    //     Validators.minLength(6),
    //     ]
    // }),
    // }),
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
    })
  })

  get emailIsInvalid(){
    return(
      this.form.controls.email.touched &&
      this.form.controls.email.dirty &&
      this.form.controls.email.invalid 
    )
  }

  get passwordIsInvalid(){
    return(
      this.form.controls.password.touched &&
      this.form.controls.password.dirty &&
      this.form.controls.password.invalid 
    )
  }

  get IsSubmitPossible(){
    return ((
      this.form.controls.password.valid  &&this.form.controls.password.valid 
    ));
  }
  onSubmit(){ 

    console.log(this.form);
    const enretedEmail = this.form.value.email ; 
    const enretedPassword = this.form.value.password ; 
    console.log(enretedEmail,enretedPassword);
    this.form.reset();
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
