const cron = require('node-cron');


class TaskScheduler{
  public everyMinut(fun){
    cron.schedule('* * * * * *', function(){
      fun()
    });
  }
}

export default new TaskScheduler()


