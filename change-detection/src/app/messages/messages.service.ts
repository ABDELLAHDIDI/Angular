import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from "rxjs";
@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  private messages = signal<string[]>([]);
//the name$ is a convention to all vars used by rxjs
//BehaviorSubject is a rapper for the property we want to check its changes 
// message$ = new BehaviorSubject<string[]>([]);

// private messages: string [] = []

  allMessages = this.messages.asReadonly();

// get allMessages(){
//     return [...this.messages];
// }

  addMessage(message: string) {
    this.messages.update((prevMessages) => [...prevMessages, message]);
    // this.messages = [...this.messages ,message];
// we rappe the prop
// this.message$.next([...this.messages])
  }
}