import * as express from "express";
import {Request, Response} from "express";
import service from "./Service"
const binance = require('./node-binance-api.js');
import env from "../enviroment"


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
      service.getBalance().then((data)=>{
        console.log("----------", data)
      });
      res.status(200).send("test")
      console.log("test")
    });
  }
}

export default new Controller();
