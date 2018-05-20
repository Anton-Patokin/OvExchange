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
    return this.http.get<any>("http://localhost:5000/binance/getColection").map((arr) => {
      return Object.keys(arr[0]).map(k => arr[0][k]);
    })
  }

}

