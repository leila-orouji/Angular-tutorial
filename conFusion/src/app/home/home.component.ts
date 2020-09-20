import { Component, OnInit, Inject } from '@angular/core';
import{Dish} from './../shared/dish';
import{DishService} from './../services/dish.service';
import{Promotion} from './../shared/promotion';
import{PromotionService} from './../services/promotion.service'
import { Corporate } from '../shared/corporate';
import { CorporateLeaderService } from '../services/corporate-leader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dish : Dish;
  promotion: Promotion;
  corporate: Corporate;
  errMessDish : string;

  constructor(private dishService: DishService,  
              private promotionService: PromotionService,
              private corporateService: CorporateLeaderService,
              @Inject('baseURL') private baseURL) { }
  
  ngOnInit(): void {
    this.dishService.getFeaturedDish()
      .subscribe ((dish)=> this.dish= dish ,
      errmess=> this.errMessDish = <any>errmess )
    
    this.promotionService.getFeaturedPromotion()
      .subscribe ((prom)=> this.promotion = prom);

    this.corporateService.getFeaturedCorporate()
      .subscribe((orporate)=> this.corporate = orporate)
 
  }

}
