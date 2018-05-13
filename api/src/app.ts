import * as express from "express";
import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import binance from "./binance/Controller"
import cron from "./croneJobs/Controller"


class App {

  constructor() {
    this.app = express();
    this.config();
    this.routes();
    cron.init()
  }

  public app: express.Application;

  private config(): void {
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
