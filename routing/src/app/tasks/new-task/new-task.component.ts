import { Component, inject, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TasksService } from '../tasks.service';
import { CanDeactivate, CanDeactivateFn, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  userId = input.required<string>();
  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDate = signal('');
  submitted = false
  private tasksService = inject(TasksService);
 private router  = inject(Router);
  onSubmit() {
    this.submitted = true;
    this.tasksService.addTask(
      {
        title: this.enteredTitle(),
        summary: this.enteredSummary(),
        date: this.enteredDate(),
      },
      this.userId()
    );
this.router.navigate(
  ['/users',this.userId(),'tasks'],
{
  // prevent user to navigate back (alt+<-)
  replaceUrl: true 
}
)
  }
}

export const canLeaveEditPage: 
CanDeactivateFn<NewTaskComponent>=
(
  component
)=>{
  if(component.submitted){
    return true;  
  }
  if(
  component.enteredDate() || 
  component.enteredTitle() || 
  component.enteredSummary()
){
  return window.confirm('Do you really want to leave ? \n you wil lose the entered data .')
}
return true;
}
