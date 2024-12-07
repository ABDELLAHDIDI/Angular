import { Component, computed, DestroyRef, inject, input, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, ActivatedRouteSnapshot, ResolveFn, RouterLink, RouterOutlet, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports:[RouterOutlet,RouterLink]
})
export class UserTasksComponent
implements OnInit {
  // userId= input.required<string>();

  // private userService = inject(UsersService);
  private activatedRoute = inject(ActivatedRoute)
  // private destroyRef = inject(DestroyRef);

  // userName = computed(
  //   ()=>this.userService.users
  //   .find(u => u.id === this.userId())?.name 
  // );
message = input.required<string>()
userName = input.required<string>()
  // userName='';

  ngOnInit(): void {

// other way for binding data from route query
// this.activatedRoute.data.subscribe({
//   next: data =>{
//     console.log(data);
    
//   }
// })


//     console.log('INPUT DATA :',this.message());
    
//     console.log(this.activatedRoute
//       .snapshot
//     );

//     const subscription = 
//     this.activatedRoute.paramMap.subscribe({
//       next: paramMap =>{
//         this.userName = this.userService.users.
//         find((u)=> u.id === paramMap.get('userId') )
//         ?.name || '';
//       }
//     })
// this.destroyRef.onDestroy(()=> subscription.unsubscribe())
    
  }
}


//this fn will be executed when ever we load diff user
export const resolveUserName: ResolveFn<string>
= (
  activatedRoute: ActivatedRouteSnapshot , 
  routerState: RouterStateSnapshot
  ) =>{
  const userService= inject(UsersService);
  const userName = 
  userService.users.find( u =>
  u.id === activatedRoute.paramMap.get('userId')
  )?.name || '' ; 
return userName ; 
}

export const resolveTitle: ResolveFn<string>
= (
  activatedRoute , 
  routerState
  ) =>{
  const userService= inject(UsersService);
return resolveUserName(activatedRoute,routerState) + '\'s task'
}
