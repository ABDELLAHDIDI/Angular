import { Component, computed, inject, Inject, signal } from '@angular/core';

import { TaskItemComponent } from './task-item/task-item.component';
import { TasksService } from '../tasks.service';
import { TasksServiceToken } from '../../../main';
import { TASK_STATUS_OPTIONS, TaskStatusOptionsProvider, TaskStatusOtions } from '../task.model';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
  providers:[TaskStatusOptionsProvider]
})
export class TasksListComponent {
  selectedFilter = signal<string>('all');
  constructor(@Inject(TasksServiceToken) private tasksServce : TasksService ){}

  taskStatusOptions = inject(TASK_STATUS_OPTIONS)
  // tasks = this.tasksServce.getTasks();
tasks = computed(()=>{
  // console.log('computed  : ' +   this.selectedFilter () );
  // console.log('tasks : ' ,this.tasksServce.getTasks()[0]);
  
  switch (this.selectedFilter ()){
    case 'OPEN':
      return this.tasksServce.getTasks().filter((elmt) => (elmt.status === 'OPEN' )); 
    case 'IN_PROGRESS':
      return this.tasksServce.getTasks().filter((elmt) => (elmt.status === 'IN_PROGRESS')); 
    case 'DONE':
      return this.tasksServce.getTasks().filter((elmt) => (elmt.status === 'DONE')); 
    default:
      return this.tasksServce.getTasks(); 
  }
})
  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter.toLocaleUpperCase());
    // this.tasks = this.tasksServce.getTasks();
    // let fitredTasks =this.tasks.filter((elmt) => (elmt.status === filter.toLocaleUpperCase()) || (filter.toLocaleLowerCase() === 'all' ));
    // this.tasks=fitredTasks
    // console.log(filter.toLocaleUpperCase());
  }
 

}
