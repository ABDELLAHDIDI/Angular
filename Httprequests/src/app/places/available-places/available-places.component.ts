import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { Place } from '../place.model';
import { PlacesComponent } from '../places.component';
import { PlacesContainerComponent } from '../places-container/places-container.component';
import { HttpClient } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-available-places',
  standalone: true,
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css',
  imports: [PlacesComponent, PlacesContainerComponent],
})
export class AvailablePlacesComponent  implements OnInit{

  places = signal<Place[] | undefined>(undefined);
  // private httpClient = inject(HttpClient);
  private placesService= inject(PlacesService)
  private destroyRef = inject (DestroyRef)

  isFetching = signal(false)
  error = signal('')

  ngOnInit(): void {
    this.isFetching.set(true);
   const subscription =
    this.placesService.loadAvailablePlaces() 
    .subscribe({
     next: (places) => {
      // console.log(events);
      // console.log(response);
      // console.log(response.body?.places)
      // console.log(resData.places);

      this.places.set(places)
      
    },
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



   onRemovePalce(selectedPlace: Place){ 
    
const subsecrption  =this.placesService.
// addPlaceToUserPlaces(selectedPlace.id)
addPlaceToUserPlaces(selectedPlace)

.subscribe({
    next: (resData) => console.log(resData),
  });
  this.destroyRef.onDestroy(()=>{
    subsecrption.unsubscribe();
  })
   }
}
