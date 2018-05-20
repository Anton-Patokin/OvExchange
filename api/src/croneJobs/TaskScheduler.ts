const cron = require('node-cron');


class TaskScheduler{
  public everySecond(fun){
    cron.schedule('* * * * * *', function(){
      fun()
    });
  }
  public evryMinut(fun){
    cron.schedule('1 * * * * *', function(){
      fun()
    });
  }
}

export default new TaskScheduler()


