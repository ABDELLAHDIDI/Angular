import { CanMatch, CanMatchFn, RedirectCommand, Router, Routes } from "@angular/router";
import { TaskComponent } from "./tasks/task/task.component";
import { TasksComponent } from "./tasks/tasks.component";
import { NoTaskComponent } from "./tasks/no-task/no-task.component";
import { resolveTitle, resolveUserName, UserTasksComponent } from "./users/user-tasks/user-tasks.component";
import { canLeaveEditPage, NewTaskComponent } from "./tasks/new-task/new-task.component";
import { NotFoundComponent } from "./not-found/not-found.component";

import { routes as userRoutes } from "../app/users/users.routes";
import { inject } from "@angular/core";

const dummyCanMatch : CanMatchFn = (
    route , segments
)=>{
    const router = inject(Router)
    const shouldGetAcces = Math.random();
    if(shouldGetAcces < 1)
    {return true ; }
    return new RedirectCommand(
        router.parseUrl('/unauthorized'));
}

export const routes: Routes = [
    {
        path:'',
        component: NoTaskComponent,
         title:'No task selected'
    },
    // {
    //     path: 'tasks' , 
    //     component: TasksComponent,
    // },
    {
        path: 'users/:userId',
        component: UserTasksComponent, 
        children : userRoutes,
        canMatch: [dummyCanMatch] , // controlle access
        data:{
            message : 'Hello!'
        },
        resolve:{
            userName: resolveUserName
        },
        title: resolveTitle
    },
    {
        path:'**',
        component: NotFoundComponent
    }
]