
const binance = require('./node-binance-api.js');
import env from "../enviroment"
import {Balance} from "../mongoDb/balance";
import CurrencyService from "./CurrencyService"

class OrderHistoryService {

  constructor() {
    binance.options({
      'APIKEY': env.binance_key,
      'APISECRET': env.binance_secret
    })

  }

  public allOrders():Promise <any>{
    return new Promise((resolve,rejact)=>{
      binance.allOrders("ETHBTC", (error, orders, symbol) => {
        console.log(symbol+" orders:", orders);
      });
    })
  }


}

export default new OrderHistoryService();
