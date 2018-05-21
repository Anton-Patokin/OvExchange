import {Component, OnInit} from '@angular/core';
import {ExchangeHttpDataService} from "./exchange-http-data.service";

@Component({
  selector: 'app-currency-overview',
  templateUrl: './currency-overview.component.html',
  styleUrls: ['./currency-overview.component.scss']
})
export class CurrencyOverviewComponent implements OnInit {

  public binanceBalances = <any>[];
  public symbols = ['BTC', 'ETH', 'BNB', 'USDT'];
  selectedSmbol = 'BTC';
  public sumOfAllCoins = 0;

  constructor(private exchangeHttpDataService: ExchangeHttpDataService) {
  }

  ngOnInit() {
    this.getBinanceBalances()
  }

  public selectSymbol(symbol){
    this.selectedSmbol = symbol
  }

  public getBinanceBalances() {
    this.exchangeHttpDataService.getBinanceBalance().subscribe((data) => {
      this.binanceBalances = data;
      this.calculateSumOfAllCoins();
      console.log(this.binanceBalances)
    })
  }

  public calculateSumOfAllCoins(){

    this.sumOfAllCoins = 0;
    this.binanceBalances.forEach((data)=>{
      console.log(data)
      this.sumOfAllCoins += (data.totalCoins * data.symbols[this.selectedSmbol])
    })
  }
}
//
