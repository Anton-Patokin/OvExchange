import app from "./app";
import env from "./enviroment"
const port = env.port;
import {DB} from './mongoDb/DB';


new DB().connect().then((db) => {
  app.listen(port, function() {
    console.log('Express server listening on port ' + port);
  });
});


