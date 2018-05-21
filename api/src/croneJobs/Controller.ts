import taskShedular from './TaskScheduler'
import binanceService from '../binance/CurrencyService'

class Controller{
  public init(){
    taskShedular.evryMinut(function () {
      binanceService.saveBalanceWithCurrentPrice().then((data)=>{
        console.log("saved to the database");
      })
    })
  }
}

export default new Controller()


