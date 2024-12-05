import { Component, computed, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { interval, map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  clickCount = signal(0)
  clickCount$ = toObservable(this.clickCount)
  interavl$ = interval(1000);
  intervalSignal = toSignal(this.interavl$,{initialValue: 0 });

  customInterval$ = new Observable((subsecriber)=>{
    let timesExecuted = 0 ; 
    // we define when it happens 
  const interval =   setInterval(()=>{
      if(timesExecuted > 3 ){
      clearInterval(interval)
      subsecriber.complete();
      return;
      }
      console.log('Emitting new value... ');
      subsecriber.next({message: 'New value'});
      timesExecuted++;
    },2000)
  })
  // interval = signal(0)
  // doubleInterval = computed(()=>this.interval()*2)
constructor(){
  // effect(()=>{
  //   console.log(`Clicked button ${this.clickCount()} times.`);
  // })
  // toObservable(this.clickCount)
}
  private destroyRef = inject(DestroyRef)
  ngOnInit(){
//     setInterval(()=>{
// this.interval.update(prevIntervalNumber => prevIntervalNumber +1 )

//    }, 1000)
//     // is a observible emits nubers 
//    const subsecription =  interval(1000).pipe(
// // add operators 
// map((val) => val * 2 ),
// // more operators 

//    ).subscribe({
//       next: (val) => console.log(val),
// // we define what happens 
//     }) ; 
//     //listen to the values emited by using sub
    // this.destroyRef.onDestroy(()=>{
    //   subsecription.unsubscribe();
    //   // to avoid memory leak 
    // })

    this.customInterval$.subscribe({
      next: (val) => console.log(val),
      complete: ()=> console.log('COMPLETED!'),
      
      
    })

    const subscription = this.clickCount$.subscribe({
next : (val) => console.log(`Clicked button ${this.clickCount()} times.`),
    })
    this.destroyRef.onDestroy(()=>{
      subscription.unsubscribe();
      // to avoid memory leak 
    })

  }

  onClick(){
    this.clickCount.update( prevCount => prevCount+1)
  }
}
