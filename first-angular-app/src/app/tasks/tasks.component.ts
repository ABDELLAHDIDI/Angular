import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { type NewTask, Task } from './task/task.model';
import { NewtaskComponent } from "./newtask/newtask.component";
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  // imports: [TaskComponent, NewtaskComponent],
  standalone: false , 
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
@Input({required: true}) userId!: string ; 
@Input({required: true } ) name!: string ; // ? it might be unset and it's fine 
// @Input( ) isAddingTask!: boolean; 
@Input() addedTask!: Task ;
// private tasksService = new TasksService();
// private tasksService: TasksService ; 
isAddingTask= false 

constructor(private tasksService: TasksService){ // it auto-craeted by TS
  // this.tasksService = tasksService ; 
}

// get isAddTAsk (){
//   return this.isAddingTask
// }

onStartAddTask(){
  this.isAddingTask = true;
}
// onCancelAddingTask(cancelAdding: boolean){
//   this.isAddingTask = cancelAdding;
// }
// onCancelAddTask(){
//   this.isAddingTask = false;
// }

onCloseAddTask(){
  this.isAddingTask = false;
}

// onSubmit(){
//   console.log('this.addedTask : ' + this.addedTask );
  
//   // this.tasks = [this.addedTask , ...this.tasks];
//   // this.addTask= false;
// }

  // tasks = [
  //   {
  //     id: 't1',
  //     userId: 'u1',
  //     title: 'Master Angular',
  //     summary:
  //       'Learn all the basic and advanced features of Angular & how to apply them.',
  //     dueDate: '2025-12-31',
  //   },
  //   {
  //     id: 't2',
  //     userId: 'u3',
  //     title: 'Build first prototype',
  //     summary: 'Build a first prototype of the online shop website',
  //     dueDate: '2024-05-31',
  //   },
  //   {
  //     id: 't3',
  //     userId: 'u3',
  //     title: 'Prepare issue template',
  //     summary:
  //       'Prepare and describe an issue template which will help with project management',
  //     dueDate: '2024-06-15',
  //   },
  // ]
  
get SelectedUserTasks(){
  return this.tasksService.getUserTasks(this.userId)
  // return this.tasks.filter((task)=> this.userId === task.userId );
}

onCompleteTask(id: string){
  console.log("id task : " + id );
  // this.tasksService.removeTask(id)
// this.tasks = this.tasks.filter((task) => task.id !== id);
}

// onAddTask(taskdata: NewTask){
// // this.tasks.push({
// //   id: new Date().getTime().toString(),
// //   userId: this.userId, 
// //   title: taskdata.title,
// //   dueDate: taskdata.date,
// //   summary: taskdata.summary
// // })
// this.tasksService.addTask(taskdata,this.userId)
// this.isAddingTask= false ; 
// }

}
