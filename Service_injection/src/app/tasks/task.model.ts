import { InjectionToken, Provider } from "@angular/core";

export type TaskStatus = 'OPEN' | 'IN_PROGRESS' | 'DONE';

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}

export const  TaskStatusOtions : TaskStatusOptions[] = [
{
  value : 'open',
  taskStatus : 'OPEN',
  text : 'Open'
},{
  value : 'in-progress',
  taskStatus : 'IN_PROGRESS',
  text : 'In_Progres'
},{
  value : 'done',
  taskStatus : 'DONE',
  text : 'Completed'
}
]

export const TASK_STATUS_OPTIONS =  new InjectionToken<TaskStatusOptions[]>('task-status-options')

type TaskStatusOptions = {
  
    value : 'open' |'in-progress'|'done',
    taskStatus : TaskStatus,
    text : string

}

export const TaskStatusOptionsProvider :Provider = {
  provide: TASK_STATUS_OPTIONS , 
  useValue : TaskStatusOtions
}
