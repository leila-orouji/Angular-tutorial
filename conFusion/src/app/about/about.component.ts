import { Component, OnInit } from '@angular/core';
import{Corporate} from './../shared/corporate';
import{CorporateLeaderService} from './../services/corporate-leader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  corporates: Corporate[];
  constructor(private corporateService: CorporateLeaderService) { }

  ngOnInit(): void {
    this.corporates = this.corporateService.getCorporates();
  }

}
