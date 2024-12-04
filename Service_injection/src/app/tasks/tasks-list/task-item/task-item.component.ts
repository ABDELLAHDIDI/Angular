import { Component, computed, effect, inject, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Task, TASK_STATUS_OPTIONS, TaskStatus } from '../../task.model';
import { TasksService } from '../../tasks.service';
import { TasksServiceToken } from '../../../../main';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
})
export class TaskItemComponent {
  task = input.required<Task>();
  private tasksService = inject(TasksServiceToken)
  taskStatusOptions = inject(TASK_STATUS_OPTIONS)

  // taskStatus = signal('OPEN')
  // constructor(private tasksService: TasksService){
    // effect(()=>{
     
    //     console.log('in computed :' +this.task().status); 
    //     switch (this.task().status) {
    //       case 'OPEN':
    //         this.taskStatus.set('Open'); break;
    //       case 'IN_PROGRESS':
    //         this.taskStatus.set('Working on it'); break;
    //       case 'DONE':
    //         this.taskStatus.set('Completed'); break; 
    //       default:
    //         this.taskStatus.set('Open'); break;
    //     } 
    // },
    // {
    //   allowSignalWrites: true, // Enable writing to signals inside effects
    // })
  // }
  taskStatus = computed(() => {

    console.log('in computed :' +this.task().status); 
    switch (this.task().status) {
      case 'OPEN':
        return 'Open';
      case 'IN_PROGRESS':
        return 'Working on it';
      case 'DONE':
        return 'Completed';
      default:
        return 'Open';
    }
   
    
  });

  onChangeTaskStatus(taskId: string, status: string) {
    let newStatus: TaskStatus = 'OPEN';

    switch (status) {
      case 'open':
        newStatus = 'OPEN';
        break;
      case 'in-progress':
        newStatus = 'IN_PROGRESS';
        break;
      case 'done':
        newStatus = 'DONE';
        break;
      default:
        break;
    }
//
    // this.tasksService.updateTask({
    //   id:taskId ,
    //   title: this.task().title,
    //   description:this.task().description,
    //   status:newStatus,
    // })

    
    // this.task().status = newStatus ; 
    // console.log( this.task().status );
    
this.tasksService.updateTaskStatus(taskId,newStatus);

  }
}
