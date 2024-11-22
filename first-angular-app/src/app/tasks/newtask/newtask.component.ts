import { Component, EventEmitter,Output } from '@angular/core';
import { FormsModule,  } from '@angular/forms';
import { type NewTask, } from '../task/task.model';

@Component({
  selector: 'app-newtask',
  imports: [FormsModule],
  templateUrl: './newtask.component.html',
  styleUrl: './newtask.component.css'
})
export class NewtaskComponent {
@Output() Cancel = new EventEmitter<void>();
@Output() Add = new EventEmitter<NewTask>();
  enteredTitile = '';
  enteredSummary = '';
  enteredDate = '' ;

  // enteredTitile = signal('');
  // enteredSummary = signal('');
  // enteredDate = signal('');
  


onCancel(){
this.Cancel.emit();
  }

  // onCancelAdding(){
  //   this.Cancel.emit(false)
  //     }

onSubmit(){
this.Add.emit(
  {
    title : this.enteredTitile , 
    summary: this.enteredSummary,
    date: this.enteredDate,
  }
)
  }


}
