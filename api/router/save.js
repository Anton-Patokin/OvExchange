const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Balance = require('../src/mongoDb/balance.js')

router.post('/:date/:totalBalance', (req, res, next) => {
  console.log("post save binance")

  Balance.findOneAndUpdate(
    {  },
    new Balance({ date: req.params.date, totalBalance: req.params.totalBalance }),
    { upsert: true },
    function (err, doc) {
      if(err){
        console.log("------------------")
        res.json("error")
      }else{
        console.log("=====================")
        res.json(doc)
      }
    })
})


module.exports = router;
