const cron = require('node-cron');


class TaskScheduler{
  public everySecond(fun){
    cron.schedule('* * * * * *', function(){
      fun()
    });
  }
  public everyMinut(fun){
    cron.schedule('* * * * * *', function(){
      fun()
    });
  }
}

export default new TaskScheduler()


