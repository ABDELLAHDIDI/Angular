import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { PlacesContainerComponent } from '../places-container/places-container.component';
import { PlacesComponent } from '../places.component';
import { HttpClient } from '@angular/common/http';
import { Place } from '../place.model';
import { catchError, map, throwError } from 'rxjs';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-user-places',
  standalone: true,
  templateUrl: './user-places.component.html',
  styleUrl: './user-places.component.css',
  imports: [PlacesContainerComponent, PlacesComponent],
})
export class UserPlacesComponent implements OnInit {


  // places = signal<Place[] | undefined>(undefined);
  // private httpClient = inject(HttpClient);
  private placesService = inject(PlacesService)
  private destroyRef = inject (DestroyRef)

  isFetching = signal(false)
  error = signal('')

  places = this.placesService.loadedUserPlaces;

  ngOnInit(): void {
    this.isFetching.set(true);
   const subscription =  
//    this.httpClient.get<{places: Place[] }> 
//    ('http://localhost:3000/user-places'
//     ,{
//     // observe: 'response'
//     // observe: 'events'
//    }
//   )
//    .pipe( map((resData)=> resData.places ) , 
//   catchError((error )=> {
//     console.log(error);
    
//     return throwError(
//     ()=> new Error( 
//      'something went wrong fetching your favorite places . please try again later !'
//     )  

//   )}
// )
//     )
this.placesService.loadUserPlaces()

    .subscribe({
    //  next: (places) => {
    //   // console.log(events);
    //   // console.log(response);
    //   // console.log(response.body?.places)
    //   // console.log(resData.places);

    //   this.places.set(places)
      
    // },
    complete: ()=> {
      this.isFetching.set(false)
    },
    error: (error: Error)=>{
// this.error.set(error.message)
// console.log(error);

this.error.set(error.message)

    }
    });

    this.destroyRef.onDestroy(()=>{
      subscription.unsubscribe();
    })
   }

   onSelectPlace(selectedPlace: Place){
    const subsecrption  =this.placesService. 
    removeUserPlace(selectedPlace)
    .subscribe({
        next: (resData) => console.log(resData),
      });
      this.destroyRef.onDestroy(()=>{
        subsecrption.unsubscribe();
      })
   }
}
