// delete Input from  --> import { Component, OnInit ,Input}
import { Component, OnInit, Inject } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Dish } from './../../shared/dish';
import { DishService } from './../../services/dish.service';
import { switchMap } from 'rxjs/operators';
import {visibility} from './../../animations/app.animation';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.scss'],
  animations : [ visibility()]
})
export class DishDetailComponent implements OnInit {

  dish: Dish;
  dishIds: string[];
  prev: string;
  next: string;
  errMess: string;
  dishCopy: Dish;
  visibility ='shown';

  constructor(private dishservice: DishService,
    private location: Location,
    private route: ActivatedRoute,
    @Inject('baseURL') private BaseURL) { }

  ngOnInit(): void {
    this.dishservice.getDishIds()
      .subscribe((dishId) => this.dishIds = dishId);
    this.route.params.pipe(switchMap((params: Params) => { this.visibility= 'hidden';
                                                           return this.dishservice.getDish(params.id);
                                                          }))
      .subscribe((dish) => {

        this.dish = dish;
        console.log(this.dish)
        this.dishCopy = dish;
        this.setPrevNext(dish.id);
        this.visibility = 'shown';
      },
        errmess => this.errMess = <any>errmess);
  }

  setPrevNext(dishId: string) {
    let index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }
  goBack(): void {
    this.location.back();
  }

}
