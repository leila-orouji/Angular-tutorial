import { Component, OnInit } from '@angular/core';
// import { from } from 'rxjs';
import { Dish } from '../shared/dish';
import{Dishes} from './../shared/dishes';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  dishes :Dish[] = Dishes;
  selectedDish :Dish = Dishes[0];
  
  constructor() {}
  ngOnInit(): void {
  }

   selectGrid(dish : Dish ){
    this.selectedDish = dish;
   } 
}
