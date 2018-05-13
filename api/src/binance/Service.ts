
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
      binance.balance(function (error, balances) {
        resolve(balances)
      });
    });
  }
}

export default new Service();
