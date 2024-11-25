import { NgModule } from "@angular/core";
import { TasksComponent } from "./tasks.component";
import { TaskComponent } from "./task/task.component";
import { NewtaskComponent } from "./newtask/newtask.component";
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
declarations: [TasksComponent,TaskComponent,NewtaskComponent],
exports: [TasksComponent],
imports:[CommonModule,FormsModule,SharedModule]
})

export class TasksModule{

}