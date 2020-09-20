import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import {from, Observable, of } from 'rxjs';
// import { delay } from 'rxjs/operators';
import {HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http';
import {baseURL} from '../shared/baseurl';
import {map, catchError} from 'rxjs/operators';
import {ProcessHTTPMsgService} from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})

export class DishService {

  constructor(private http: HttpClient,
              private processHTTPMsgService: ProcessHTTPMsgService) { }
 
  getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>(baseURL + 'dishes')
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getDish(id: string): Observable<Dish> {
    console.log("jiiiiii")
   console.log('ddddd : ' , this.http.get<Dish>(baseURL+'dishes/'+id))
    return this.http.get<Dish>(baseURL+'dishes/'+id)
      .pipe(catchError(this.processHTTPMsgService.handleError));
     
  }

  getFeaturedDish(): Observable<Dish>{
    // return of (Dishes.filter((item) => item.featured)[0]).pipe(delay(2000));
    return this.http.get<Dish[]>(baseURL + 'dishes?featured=true')
       .pipe(map(dishes => dishes[0]))
       .pipe(catchError(this.processHTTPMsgService.handleError));
  }
  
  getDishIds() : Observable<string[] | any>{
    // return of (Dishes.map(dish => dish.id));
    return this.getDishes().pipe(map(dishes => dishes.map(dish=> dish.id) ))
      .pipe(catchError(error => error));

  }

  putDish(dish: Dish) : Observable<Dish> {
    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    };

    return this.http.put<Dish>(baseURL+ 'dishes/'+ dish.id, dish, httpOptions)
      .pipe(catchError(this.processHTTPMsgService.handleError)) 
  }
}
