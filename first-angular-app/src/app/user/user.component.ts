import { Component , computed, EventEmitter, input, Input, output, Output, signal } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';
import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)



@Component({
  selector: 'app-user',
  standalone: true , 
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
// @Input({required: true}) id!: string;
// @Input({required: true })  avatar!: string ;
// @Input({required: true })  name!: string ;
@Input({required: true}) user!: User ; 
@Input({required: true}) selected!: boolean ; 
@Output() select = new EventEmitter<string>();




// id = input.required<string>();
// avatar = input.required<string>();  //input<string>(); 
// name = input.required<string>() ; 
// select = output<string>();

// selectedUser = signal(DUMMY_USERS[randomIndex])  ;

// imagePath= computed(()=> 'assets/users/'+this.avatar() )

get imagePath(){return 'assets/users/'+this.user.avatar ;}
 
onSelectUser (){
//    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
// this.selectedUser.set( DUMMY_USERS[randomIndex] )

this.select.emit(this.user.id);

}


}
