import { inject, Injectable, signal } from '@angular/core';

import { Place } from './place.model';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap, throwError } from 'rxjs';
import { ErrorService } from '../shared/error.service';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private userPlaces = signal<Place[]>([]);
private errorService = inject(ErrorService)
  loadedUserPlaces = this.userPlaces.asReadonly();

  private httpClient = inject(HttpClient);

  loadAvailablePlaces() {
    return this.fetchPlaces(
      'http://localhost:3000/places',
      'something went wrong fetching the avaible places . please try again later !'   
    );
  }

  loadUserPlaces() {
    return this.fetchPlaces(
      'http://localhost:3000/user-places',
      'something went wrong fetching your favorite places . please try again later !'
    ).pipe(tap({
      next: (userPlaces)=>this.userPlaces.set(userPlaces)
    }));
  }

  // addPlaceToUserPlaces(placeId: string) {
  //  return  this.httpClient.put(
  //     'http://localhost:3000/user-places' ,{
  //       placeId,
  //     })

  // }

  addPlaceToUserPlaces(place: Place) {
    const prevPlaces = this.userPlaces()
    if(!prevPlaces.some((p)=> p.id === place . id)){
    this.userPlaces.set([...prevPlaces,place])
  }
    // this.userPlaces.update((prevPlaces)=> [...prevPlaces , place])
    return  this.httpClient.put(
       'http://localhost:3000/user-places' ,{
         placeId: place.id,
       })
      //  .pipe(tap({
      //   next: (userPlace: {userPLaces: Place[]}) => 
      //     this.userPlaces.set([...userPlace.userPlaces])

      //  }))
      .pipe(
        catchError(error =>{
          this.userPlaces.set(prevPlaces);
          this.errorService.showError('Failed to store selected place.')
          return throwError(()=> new Error('Failed to store selected place.'))
        })
      )
 
   }

  removeUserPlace(place: Place) {
    const prevPlaces = this.userPlaces() 
    this.userPlaces.update((prev)=> prev.filter((elmt) =>elmt.id !== place.id )) 
    
    return  this.httpClient.delete(
       `http://localhost:3000/user-places/${place.id}` ) 
      .pipe(
        catchError(error =>{
          this.userPlaces.set(prevPlaces);
          this.errorService.showError('Failed to remove the selected place.')
          return throwError(()=> new Error('Failed to remove the selected place.'))
        })
      )
  }

  private fetchPlaces(url : string , errorMessage: string ){
    return this.httpClient.get<{places: Place[] }> 
    (url
     ,{
     // observe: 'response'
     // observe: 'events'
    }
   )
    .pipe( map((resData)=> resData.places ) , 
   catchError((error )=> {
     console.log(error);
     
     return throwError(
     ()=> new Error( 
errorMessage     )  
 
   )}
 )
     )
  }
}
