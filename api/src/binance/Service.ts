
const binance = require('./node-binance-api.js');
import env from "../enviroment"

class Service {

  constructor() {
    binance.options({
      'APIKEY': env.binance_key,
      'APISECRET': env.binance_secret
    })
  }

  public getBalance():Promise<any> {
    return new Promise<string>((resolve, reject) => {
      binance.balance(function (error, binanceCoins) {
        let array = <any>[];
        for (var x in binanceCoins) {
          var value = Number(binanceCoins[x].available) > 0;
          if (value) {
            array.push({name: x, available: binanceCoins[x].available, onOrder: binanceCoins[x].onOrder})
          }
          resolve(array)
        }
      });
    });
  }

  public getCurrentPrices(){
    
  }


}

export default new Service();
