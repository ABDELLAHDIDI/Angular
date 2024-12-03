import { Injectable } from "@angular/core";
import { Task } from "./task.model";

@Injectable({
    providedIn:'root'
})

export class TasksService {
     tasks: Task[] ; 

     constructor(){this.tasks= []}

     getTasks(){
return this.tasks ;
     }

     addTask(task : Task){
        // id: new Date().getTime().toString(),
this.tasks.push(task);
     }

     updateTask(task : Task){
        this.tasks  = this.tasks.map((taskElmt) =>{
    if(taskElmt.id === task.id ){
return task ;
    }
    else {
        return taskElmt ;
    }

})
     }

     deleteTask(id: string) {
        this.tasks = this.tasks.filter(task => task.id !== id);
      }
      


}