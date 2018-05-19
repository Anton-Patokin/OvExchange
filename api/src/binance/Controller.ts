import * as express from "express";
import {Request, Response} from "express";
import service from "./Service"
const binance = require('./node-binance-api.js');
import env from "../enviroment"
import {Balance} from "../mongoDb/balance";


class Controller {

  private router:any;
  constructor() {
    binance.options({
      'APIKEY': env.binance_key,
      'APISECRET': env.binance_secret
    })

    this.router = express.Router();
  }

  public routes() {
    return this.router.get('/balance', (req: Request, res: Response) => {
      service.getBalance().then((binanceCoins)=>{

      console.log(binanceCoins);
      res.status(200).send(binanceCoins)

        // let array = []
      // for (var x in binanceCoins) {
      //   var value = Number(binanceCoins[x].available) > 0;
      //   if (value) {
      //     array.push({name: x, available: binanceCoins[x].available, onOrder: binanceCoins[x].onOrder})
      //   }
      // }
      // console.log(array);
      // res.status(200).send(array)
      //
      //
      //   console.log("----------------------------------")
        // Balance.findOneAndUpdate(
        //   {  },
        //   new Balance({ data}),
        //   { upsert: true },
        //   function (err, doc) {
        //     if(err){
        //       console.log("------------------")
        //       res.json("error")
        //     }else{
        //       console.log("=====================")
        //       res.json(doc)
        //     }
        //   })


      });
      console.log("test")
    });
  }
}

export default new Controller();



