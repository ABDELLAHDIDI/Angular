import { Routes } from "@angular/router";
import { resolveUserTasks, TasksComponent } from "../tasks/tasks.component";
import { canLeaveEditPage, NewTaskComponent } from "../tasks/new-task/new-task.component";

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'tasks',
        pathMatch:'prefix',
        // pathMatch:'full',
       
    },
    {
        path:'tasks',
        component: TasksComponent,
        // runGuardsAndResolvers: "paramsOrQueryParamsChange",
        runGuardsAndResolvers: "always",
        resolve:{
            userTasks: resolveUserTasks,
        }
     },
     {
        path: 'tasks/new',
        component: NewTaskComponent,
        canDeactivate: [canLeaveEditPage] , 
     }
]