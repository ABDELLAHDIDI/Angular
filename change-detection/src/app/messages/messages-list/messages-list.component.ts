import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, input, OnInit } from '@angular/core';
import { MessagesService } from '../messages.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-messages-list',
  standalone: true,
  // imports: [AsyncPipe],
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessagesListComponent /*implements OnInit */ {

  // messages: string [] = [] ; 

 
  // messages = input.required<string[]>();

  private messagesService = inject(MessagesService)
  // we use this for the component we should check 
//   private cdRef = inject(ChangeDetectorRef);
// private destroyRef = inject(DestroyRef)


//   ngOnInit(): void {

//     // that make a subsecription forthe proprety to be notified when ever the porp is changed 
// const subsecription = 
// this.messagesService.message$.subscribe((messagses)=>{
// this.messages = messagses
// //trigger the chage detection 
// this.cdRef.markForCheck();
// })

// // when the component is about to be destroied 
// this.destroyRef.onDestroy(()=>{
//   subsecription.unsubscribe(); 
// })
// }

  messages  = this.messagesService.allMessages

  // get messages (){
  //   return this.messagesService.allMessages;
  // }


  // messages$ = this.messagesService.message$ ; 

  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }
}
