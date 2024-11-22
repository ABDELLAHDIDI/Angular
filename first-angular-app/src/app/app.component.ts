import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true , 
  imports: [ HeaderComponent, UserComponent, TasksComponent], //, NgFor, NgIf
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
