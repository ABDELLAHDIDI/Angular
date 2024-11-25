import { Component } from '@angular/core';

import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone: false , 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-angular-app';
  users = DUMMY_USERS;
  userId?: string  ; 
  
  onSelectUser(id: string ){
  console.log('selected  user with id : '+id);
  this.userId=id;
  }

get SelectedUser( ){
//   let user = DUMMY_USERS.find(user => user.id === this.userId)?.name 
//   if(!user) user = ''
// return  user ;
return DUMMY_USERS.find(user => user.id === this.userId) 
}
}
