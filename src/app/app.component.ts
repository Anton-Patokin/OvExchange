import {Component, OnInit} from '@angular/core';
import {ExchangeHttpDataService} from "./currency_overview/exchange-http-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public binanceBalances;

  constructor() {

  }

  ngOnInit() {
  }


}
