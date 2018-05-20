import {Component, OnInit} from '@angular/core';
import {ExchangeHttpDataService} from "./exchange-http-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public binanceBalances;

  constructor(private exchangeHttpDataService: ExchangeHttpDataService) {

  }

  ngOnInit() {
    this.getBinanceBalances();
  }

  public getBinanceBalances(){
     this.exchangeHttpDataService.getBinanceBalance().subscribe((data)=>{
       this.binanceBalances = data;
       console.log(this.binanceBalances[0])

     })
  }
}
