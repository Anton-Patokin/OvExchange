import { Component, OnInit } from '@angular/core';
import {ExchangeHttpDataService} from "./exchange-http-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public binanceExchangeBalances = [];
  public currency = [];
  public totalbincoins= 0;
  constructor(private exchangeHttpDataService:ExchangeHttpDataService){

  }

  ngOnInit() {
    this.exchangeHttpDataService.getBinanceBalance().subscribe((data)=>{
      this.binanceExchangeBalances = data;

      this.exchangeHttpDataService.getCurrentPrices(this.binanceExchangeBalances).subscribe((currency)=>{
        this.currency = currency;
      })
    })

  }

  public getSimbols(){
    return this.exchangeHttpDataService.getSimbols();
  }

  public ifIndexExist(x,y){
    if(this.currency[x] && this.currency[x][y]){
      return this.currency[x][y];
    }else {
      return "y"
    }
  }

  public totalAmountOfCoins(x,y){
    return Number(x) + Number(y);
  }

  public totalMoney(totalAmount, x){
    if(this.currency.length != 0 && totalAmount && this.currency[x][0]){
      this.totalbincoins += Number(totalAmount) * Number(this.currency[x][0]);
      return Number(totalAmount) * Number(this.currency[x][0]);
    }
  }

}
