import * as express from "express";
import {Request, Response} from "express";
import CurrencyService from "./CurrencyService"

const binance = require('./node-binance-api.js');
import env from "../enviroment"
import {Balance} from "../mongoDb/balance";


class Controller {

  private router: any;

  constructor() {
    binance.options({
      'APIKEY': env.binance_key,
      'APISECRET': env.binance_secret
    })

    this.router = express.Router();
  }

  public routes() {
     this.router.get('/getColection', (req: Request, res: Response) => {
       CurrencyService.getBalanceWithCurencyFromDB().then((data)=>{
          console.log("-----getColection-------")
          res.json(data);
        })
    });
    return this.router
  }
}

export default new Controller();



