import { Component, signal } from '@angular/core';

import { TaskItemComponent } from './task-item/task-item.component';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
})
export class TasksListComponent {
  selectedFilter = signal<string>('all');
  constructor(private tasksServce : TasksService ){}
  tasks = this.tasksServce.getTasks();

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
    this.tasks = this.tasksServce.getTasks();
    let fitredTsaks =this.tasks.filter((elmt) => elmt.status === filter.toLocaleUpperCase());
    this.tasks=fitredTsaks
    console.log(filter.toLocaleUpperCase());
  }
 

}
