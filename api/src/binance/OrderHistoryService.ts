const binance = require('./node-binance-api.js');
import env from "../enviroment"
import {Balance} from "../mongoDb/balance";
import CurrencyService from "./CurrencyService"
import {History} from "../mongoDb/History";

class OrderHistoryService {

  constructor() {
    binance.options({
      'APIKEY': env.binance_key,
      'APISECRET': env.binance_secret
    })

  }

  public allTradesByCoinname(name): Promise<any> {
    return new Promise((resolve, rejact) => {
      binance.trades(name, (error, trades, symbol) => {
        resolve({simbol:symbol, trades:trades});
      });
    })
  }
  public getAllOrders(): Promise<any> {
    return new Promise((resolve, rejact) => {
      binance.allOrders("AIONBTC", (error, orders, symbol) => {
        resolve(orders)
      });
    })
  }

  public findAllcoinsHistory() {
    this.cleanHistory()
    CurrencyService.getBalanceWithCurencyFromDB().then((currencies) => {
      currencies = currencies[0].toObject()
      currencies.balance.forEach((currency) => {
        ['USDT', 'BNB', 'ETH', 'BTC'].forEach((symbol) => {
          let exchangeValues = symbol + currency.name;
          this.allTradesByCoinname(symbol + currency.name).then((historyVlaue) => {
            this.allTradesByCoinname(currency.name + symbol).then((historyVlaue) => {
              if (historyVlaue.trades.length) {
                this.savetoHistory(historyVlaue);
              }
            });
          })
        })
      })
    })
  }

  public getHistoryFromDB():Promise<any>{
    return new Promise((resolve, rejact)=>{
      History.find({id: env.binance_key},{history:1}).then((data)=>{
        resolve(data[0])
      })
    })
  }

  public savetoHistory(history) {
    History.update( { id : env.binance_key }, {id:env.binance_key, $push:{history : history}}, { upsert : true }, (message)=>{
      console.log(message)
    } );
  }
  public cleanHistory() {
    History.remove({}).then((data)=>{
      console.log("DB removed")
    });
  }

}

export default new OrderHistoryService();
