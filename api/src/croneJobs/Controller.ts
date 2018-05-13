import taskShedular from "./TaskScheduler"

class Controller{
  public init(){
    taskShedular.everyMinut(function () {
      console.log("run evry minut");
    })
  }
}

export default new Controller()


