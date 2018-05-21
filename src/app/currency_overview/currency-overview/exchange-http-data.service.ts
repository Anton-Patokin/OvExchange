import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Rx'
import "rxjs/add/operator/filter"
import "rxjs/add/operator/map"
import index from "@angular/cli/lib/cli";

@Injectable()
export class ExchangeHttpDataService {



  constructor(private http: HttpClient) {
  }
  public getBinanceBalance() {
    const allowed = ['item1', 'item3'];

    return this.http.get<any>("http://localhost:5000/binance/getColection").map(data => data[0]).map((arr) => {
      return Object.keys(arr).filter(key => arr[key].hasOwnProperty('name')).map(k => arr[k])
    })
  }


}

