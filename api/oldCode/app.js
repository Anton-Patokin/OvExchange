const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const binance = require('../src/binance/node-binance-api.js');
const config = require('./enviroment.js');
const mongoose = require('mongoose');
// const scanResource = require('./mongoDb/binance_balances.js');
const balance = require('./mongoDb/balance');
const balanceRouter = require('./router/save.js')

mongoose.connect('mongodb://localhost:23456/ovExchange').then(()=>{
    console.log("connected ---------------------------------")
})


app.use(bodyParser.urlencoded({ extended: true}));

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', config.env.app_host);

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


app.get('/getBalance/:getApi', (request, response) => {
    binance.options({
      'APIKEY':config.env.binance_key,
      'APISECRET':config.env.binance_secret
    });

    app.use('/save', balanceRouter);



// Getting list of current balances

	if(request.params.getApi == "balances"){
        binance.balance(function(error, balances) {
            response.json(balances);

        });
	}

	if(request.params.getApi == "currentPrice"){
        // Getting latest price of a symbol
        binance.prices(function(error, ticker) {
            response.json(ticker);
        });
	}


    // // Periods: 1m,3m,5m,15m,30m,1h,2h,4h,6h,8h,12h,1d,3d,1w,1M
    // binance.candlesticks("BNBBTC", "5m", function(error, ticks) {
	 //    console.log("candlesticks()", ticks);
	 //    let last_tick = ticks[ticks.length - 1];
	 //    let [time, open, high, low, close, volume, closeTime, assetVolume, trades, buyBaseVolume, buyAssetVolume, ignored] = last_tick;
	 //    console.log("BNBBTC last close: "+close);
    // });
    //
    //
    // // Maintain Market Depth Cache Locally via WebSocket
    // binance.websockets.depthCache(["BNBBTC"], function(symbol, depth) {
	 //    let max = 10; // Show 10 closest orders only
	 //    let bids = binance.sortBids(depth.bids, max);
	 //    let asks = binance.sortAsks(depth.asks, max);
	 //    console.log(symbol+" depth cache update");
	 //    console.log("asks", asks);
	 //    console.log("bids", bids);
	 //    console.log("ask: "+binance.first(asks));
	 //    console.log("bid: "+binance.first(bids));
    // });


})

app.listen(config.env.api_port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${config.env.api_port}`)
})
