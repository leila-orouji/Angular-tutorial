import { Injectable } from '@angular/core';
import { Corporate } from './../shared/corporate';
import { Corporates } from './../shared/corporates';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CorporateLeaderService {

  constructor() { }

  getCorporates(): Observable <Corporate[]> {
    return of (Corporates).pipe(delay(2000));
  }

  getFeaturedCorporate(): Observable<Corporate> {
    return of (Corporates.filter((item) => item.featured)[0]).pipe(delay(2000));
}
}
