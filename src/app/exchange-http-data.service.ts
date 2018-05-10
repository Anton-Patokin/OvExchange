import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Rx'
import "rxjs/add/operator/filter"
import "rxjs/add/operator/map"

@Injectable()
export class ExchangeHttpDataService {

  symbols = ['BTC', 'ETH', 'BNB', 'USDT'];

  constructor(private http: HttpClient) {
  }


  public getBinanceBalance() {
    return this.http.get<any>("http://localhost:5000/balances").map((balances) => {
      let array = []
      for (var x in balances) {
        var value = Number(balances[x].available) > 0;
        if (value) {
          array.push({name: x, available: balances[x].available, onOrder: balances[x].onOrder})
        }
      }
      return array;
    });
  }

  public getCurrentPrices(balances) {
    return this.http.get<any>("http://localhost:5000/currentPrice").map((currentPrices) => {
      console.log(currentPrices)
      let array = []

      for (var x in balances) {
        let simbolsArray = [];
        for (var simbol of this.symbols) {
          if (currentPrices[balances[x].name + simbol]) {
            simbolsArray.push(currentPrices[balances[x].name + simbol])
          } else if (currentPrices[simbol + balances[x].name]) {
            simbolsArray.push(currentPrices[simbol + balances[x].name])
          }else {
            if(balances[x].name == simbol){
              simbolsArray.push("1")
            }else{
              simbolsArray.push("/")
            }
          }
        }
        array.push(simbolsArray)
      }
      return array;
    });
  }


  public getSimbols(){
    return this.symbols;
  }


}
