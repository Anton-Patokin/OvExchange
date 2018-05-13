import {Component, OnInit} from '@angular/core';
import {ExchangeHttpDataService} from "./exchange-http-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public balancesInfo = [];
  public totalBalance = 0;
  private oneHoureInterval: number = 3600000;

  constructor(private exchangeHttpDataService: ExchangeHttpDataService) {

  }

  ngOnInit() {
    this.getBinanceInfo()
    setInterval(() => {
      this.getBinanceInfo()
    }, 10000);

  }
//test
  public getSimbols() {
    return this.exchangeHttpDataService.getSimbols();
  }

  private getBinanceInfo() {

    this.exchangeHttpDataService.getBinanceBalance().subscribe((balances) => {
      this.exchangeHttpDataService.getCurrentPrices(balances).subscribe((currency) => {
        this.balancesInfo = [];
        this.totalBalance = 0;
        balances = balances.map((balance, index) => {
          return [balances[index], currency[index]]
        })

        balances.forEach((balance, index) => {
          const totalCoins = Number(balance[0].available) + Number(balance[0].onOrder);
          const priceBTC = balance[1][0];
          this.balancesInfo.push({
            name: balance[0].name,
            available: balance[0].available,
            onOrder: balance[0].onOrder,
            total: totalCoins,
            BTC: priceBTC,
            ETH: balance[1][1],
            BNB: balance[1][2],
            USDT: balance[1][3],
            totalPrice: totalCoins * Number(priceBTC)
          })
        })

        this.totalBalance = this.balancesInfo.reduce((total, balance) => {
          return total + balance.totalPrice;
        }, 0)

        console.log(this.balancesInfo, this.totalBalance)
        this.exchangeHttpDataService.saveTotalBalance(this.totalBalance)
      })
    })
  }

}
