import * as express from "express";
import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import binance from "./binance/Controller"
import cron from "./croneJobs/Controller"
import env from "./enviroment"


class App {

  constructor() {
    this.app = express();
    this.config();
    this.routes();
    cron.init()
  }

  public app: express.Application;

  private config(): void {
    this.app.use(function (req, res, next) {

      // Website you wish to allow to connect
      res.setHeader('Access-Control-Allow-Origin', env.app_host);

      // Request methods you wish to allow
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

      // Request headers you wish to allow
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

      // Set to true if you need the website to include cookies in the requests sent
      // to the API (e.g. in case you use sessions)
      res.setHeader('Access-Control-Allow-Credentials', <string>'true');

      // Pass to next layer of middleware
      next();
    });
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));

    this.app.use('/binance', binance.routes());

  }

  private routes(): void {
    const router = express.Router();

    router.get('/', (req: Request, res: Response) => {
      res.status(200).send(`<a href="/">/</a><br><a href="/binance/balance">/binance/balance</a>`)
    });


    router.post('/', (req: Request, res: Response) => {
      const data = req.body;
      // query a database and save data
      res.status(200).send(data);
    });

    this.app.use('/', router)

  }
///
}

export default new App().app;
