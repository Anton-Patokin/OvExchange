import app from "./app";
import env from "./enviroment"
const port = env.port;
app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});
