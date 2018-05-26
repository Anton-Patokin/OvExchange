import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Rx'
import "rxjs/add/operator/filter"
import "rxjs/add/operator/map"
import index from "@angular/cli/lib/cli";

@Injectable()
export class ExchangeHttpDataService {

  public balance = [];

  constructor(private http: HttpClient) {
  }
  public getBinanceBalance() {
    return this.http.get<any>("http://localhost:5000/binance/getColection").map((data) => {
      this.balance = data.balance;
      return data.balance
    })
  }
  public getBinanceHistory() {
    return this.http.get<any>("http://localhost:5000/binance/getHistory").map(data => data.history).map(data => data)
  }

  public getBalance(){
    return this.balance;
  }

  public convertHistory(data){
    let profitTable=[];
    let buyCost = 0;
    let buyCoins = 0;
    let sellProfit =0;
    let sellCoins =0;
    let totaalAvailebleCoins = 0;
    let currentPriceBTC = 0;
    data.forEach((coin)=>{
      console.log(coin);
      this.balance.forEach((coinAvailable)=>{
        if(coin.name.substring(0, 3) == coinAvailable.name){
          totaalAvailebleCoins = coinAvailable.available;
          currentPriceBTC = coinAvailable.symbols.BTC;
        }
      });
      coin.trades.forEach((trade)=>{
        if(trade.isBuyer){
          buyCost += Number(trade.price) + Number(trade.qty);
          buyCoins += Number(trade.qty);
        }else {
          sellProfit += Number(trade.price) + Number(trade.qty);
          sellCoins += buyCoins += Number(trade.qty);
        }
      })
      let evaragePriceBuy = buyCost / buyCoins;
      let evaragePriceSell = sellProfit / sellCoins;
      // let evarePriceCoinsLeft =

    });
    let TotalSpend = buyCost - buyCost;
    return data;
  }

}

// commission
//   :
//   "0.00006705"
// commissionAsset
//   :
//   "BTC"
// id
//   :
//   1155560
// isBestMatch
//   :
//   true
// isBuyer
//   :
//   false
// isMaker
//   :
//   true
// orderId
//   :
//   8187726
// price
//   :
//   "0.00029800"
// qty
//   :
//   "225.00000000"
// time
//   :
//   1524983960415

