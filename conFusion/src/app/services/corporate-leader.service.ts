import { Injectable } from '@angular/core';
import { Corporate } from './../shared/corporate';
import { Corporates } from './../shared/corporates'

@Injectable({
  providedIn: 'root'
})

export class CorporateLeaderService {

  constructor() { }

  getCorporates(): Corporate[] {
    return Corporates;
  }

  getFeaturedCorporate(): Corporate {
    return Corporates.filter((item) => item.featured)[0];
  }
}
