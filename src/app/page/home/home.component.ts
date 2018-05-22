import { Component, OnInit } from '@angular/core';
import { MarketApiService } from '../../service/market-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  
  constructor(private marketApiService:MarketApiService) { 
    this.marketApiService.getcurrency().subscribe((res:any)=>{
      let objs = res.data;

      let arr = Object.keys(objs).map((index) => objs[index]);
  
      let sorts = arr.sort((a,b)=> a.rank - b.rank );

      let arr2 = sorts.filter(rank => rank.rank <= 10);

      this.markets = arr2

      
      
    })
  }
markets=[];

  ngOnInit() {
  }

}
