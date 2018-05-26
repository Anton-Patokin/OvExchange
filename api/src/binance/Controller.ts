import * as express from "express";
import {Request, Response} from "express";
import CurrencyService from "./CurrencyService"
import OrderHistoryService from "./OrderHistoryService"

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
          res.json(data[0]);
        })
    });
    this.router.get('/getHistory', (req: Request, res: Response) => {
      OrderHistoryService.getHistoryFromDB().then((data)=>{
        res.json(data);
      })
    });
    this.router.get('/getDepositHistory', (req: Request, res: Response) => {
      OrderHistoryService.depositHistory().then((data)=>{
        res.json(data);
      })
    });
    return this.router
  }


}

export default new Controller();



