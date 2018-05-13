import * as express from "express";
import { Request, Response } from "express";
class Controller {
  public routes() {
    const router = express.Router();

    return router.get('/balance', (req: Request, res: Response) => {
      res.status(200).send({
        message: 'balance'
      })
    });
  }
}

export default new Controller();
