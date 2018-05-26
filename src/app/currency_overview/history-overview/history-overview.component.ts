import { Component, OnInit } from '@angular/core';
import {ExchangeHttpDataService} from "../exchange-http-data.service";

@Component({
  selector: 'app-history-overview',
  templateUrl: './history-overview.component.html',
  styleUrls: ['./history-overview.component.scss']
})
export class HistoryOverviewComponent implements OnInit {

  public coinsHistory = [];
  public coin = [];
  constructor(private exchangeHttpDataService: ExchangeHttpDataService) { }

  ngOnInit() {
    this.exchangeHttpDataService.getBinanceHistory().subscribe((data)=>{
      this.coinsHistory = data;
      this.coin = this.coinsHistory[0];
    })
  }


  public selectHistory(index){
    this.coin = this.coinsHistory[index];
  }

}
//
