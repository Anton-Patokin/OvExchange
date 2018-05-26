const binance = require('./node-binance-api.js');
import env from "../enviroment"
import {Balance} from "../mongoDb/balance";

class CurrencyService {

  constructor() {
    binance.options({
      'APIKEY': env.binance_key,
      'APISECRET': env.binance_secret
    })

  }

  public getBalance(): Promise<any> {
    return new Promise<string>((resolve, reject) => {
      binance.balance(function (error, binanceCoins) {
        resolve(binanceCoins)
      });
    });
  }

  public getCurrentPrices(): Promise<any> {
    return new Promise((resolve, reject) => {
      binance.prices(function (error, currentPrices) {
        resolve(currentPrices)
      });
    });
  }

  public apiBalanceWithCurrentPrice(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.getCurrentPrices().then((currentPrices) => {
        this.getBalance().then((binanceCoins) => {
          let symbols = ['BTC', 'ETH', 'BNB', 'USDT'];

          let array = <any>[];
          for (let binanceCoinIndex in binanceCoins) {

            var value = Number(binanceCoins[binanceCoinIndex].available) > 0;

            if (value) {
              let simbolsArray = <any>[];
              for (var simbol of symbols) {
                if (currentPrices[binanceCoinIndex + simbol]) {
                  simbolsArray.push(currentPrices[binanceCoinIndex + simbol])
                } else if (currentPrices[simbol + binanceCoinIndex]) {
                  simbolsArray.push(currentPrices[simbol + binanceCoinIndex])
                } else {
                  if (binanceCoins[binanceCoinIndex].name == simbol) {
                    simbolsArray.push("1")
                  } else {
                    simbolsArray.push("/")
                  }
                }
              }
              array.push({
                name: binanceCoinIndex,
                available: binanceCoins[binanceCoinIndex].available,
                onOrder: binanceCoins[binanceCoinIndex].onOrder,
                totalCoins: Number(binanceCoins[binanceCoinIndex].available) + Number(binanceCoins[binanceCoinIndex].onOrder),
                symbols: {BTC: simbolsArray[0], ETC: simbolsArray[1], BNB: simbolsArray[2], USDT: simbolsArray[3]}
              })
            }
          }
          resolve(array)
        })
      })
    })
  }

  public saveBalanceWithCurrentPrice():Promise<any> {
    return new Promise((resolve, reject)=>{
      this.apiBalanceWithCurrentPrice().then((data) => {
        this.removeBinanceColection();
        let binaceDb = new Balance({balance:data});
        binaceDb.save().then(item => {
         resolve("item saved to database");
        }).catch(err => {
         resolve("unable to save to database");
        });
      }).catch(error => console.log(error))
    })
  }

  public removeBinanceColection(){
    Balance.remove({}).then((data)=>{
      console.log("DB removed", data)
    });
  }

  public getBalanceWithCurencyFromDB():Promise<any>{
    return new Promise((resolve, rejact)=>{
      Balance.find({},{balance:1}).then((data)=>{
        resolve(data)
      })
    })
  }

}

export default new CurrencyService();
