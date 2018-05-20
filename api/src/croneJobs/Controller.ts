import taskShedular from './TaskScheduler'
import binanceService from  './../binance/Service'

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


