import { inject, Injectable, signal } from "@angular/core";
import { Task, TaskStatus } from "./task.model";
import { LoggingService } from "../logging.service";

@Injectable({
    providedIn:'root'
})

export class TasksService {
    private tasks = signal<Task[]>([]) 
    private loggingService = inject(LoggingService)
     getTasks(){
return this.tasks() ;
     }

     addTask(taskData : {title: string , description: string}){
        const newTask : Task =  {
            ...taskData , 
            id: new Date().getTime().toString(),
            status: 'OPEN'
        } 
 this.tasks.update((oldTask)=>{return  [...oldTask , newTask] })
 this.loggingService.log('ADDED TASK WITH TITLE '+taskData.title);
     }

     updateTask(task : Task){
        this.tasks.update((oldTask)=>{
           return oldTask.map((taskElmt) =>{
                if(taskElmt.id === task.id ){
            return task ;
                }
                else {
                    return taskElmt ;
                }})
        })

}
    

     deleteTask(id: string) {
        this.tasks.update((oldTask)=>{
return oldTask.filter(task => task.id !== id);
        })
      }

      updateTaskStatus(taskId: string , newStatus: TaskStatus){
this.tasks.update((oldTasks) =>{
    return oldTasks.map((task)=>{
      return  task.id === taskId ? {...task , status : newStatus } : task 
    })
})
 this.loggingService.log('CHANGE TASK STATUS TO '+newStatus);

}
    }
