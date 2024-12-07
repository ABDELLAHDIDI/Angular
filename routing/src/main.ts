import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { TaskComponent } from './app/tasks/task/task.component';
import { routes } from './app/app.routes';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent,appConfig
    // {
    // providers:[
        // provideRouter(
//out source this 
    // [
    //     {
            // path: 'tasks' , 
            // component: TaskComponent,
    //     }
    // ]
// )
// provideRouter(routes)
// ]}
).catch((err) => console.error(err));
