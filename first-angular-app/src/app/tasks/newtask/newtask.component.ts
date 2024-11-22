import { Component, EventEmitter,inject,Input,Output } from '@angular/core';
import { FormsModule,  } from '@angular/forms';
import { type NewTask, } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-newtask',
  imports: [FormsModule],
  templateUrl: './newtask.component.html',
  styleUrl: './newtask.component.css'
})
export class NewtaskComponent {
// @Output() Cancel = new EventEmitter<void>();
// @Output() Add = new EventEmitter<NewTask>();
@Input({required: true}) userId!: string ; 
@Output() close = new EventEmitter<void>();

  enteredTitile = '';
  enteredSummary = '';
  enteredDate = '' ;

  // enteredTitile = signal('');
  // enteredSummary = signal('');
  // enteredDate = signal('');
  
private tasksService = inject(TasksService)

onCancel(){
this.close.emit();
  }

  // onCancelAdding(){
  //   this.Cancel.emit(false)
  //     }

onSubmit(){
// this.Add.emit(
//   {
//     title : this.enteredTitile , 
//     summary: this.enteredSummary,
//     date: this.enteredDate,
//   }
// )

this.tasksService.addTask({
  title : this.enteredTitile , 
  summary: this.enteredSummary,
  date: this.enteredDate,
},this.userId)

    this.close.emit()


  }


}
