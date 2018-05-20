import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Rx'
import "rxjs/add/operator/filter"
import "rxjs/add/operator/map"
import index from "@angular/cli/lib/cli";

@Injectable()
export class ExchangeHttpDataService {

  symbols = ['BTC', 'ETH', 'BNB', 'USDT'];

  constructor(private http: HttpClient) {
  }


  public getBinanceBalance() {
    return this.http.get<any>("http://localhost:5000/binance/getColection").map((data) => {
      // return balances[0][Object.keys(balances[0][0])];
      return data[0];
    }).map((balance)=>{
      return Object.keys(balance).map(function(key) {
        if(balance[key].name){
          return balance[key]
        }
      });
      ;
    });
  }
}
