const express = require('express');
const app = express();
const sceneriesRoutes = express.Router();

// Require Product model in our routes module
let Sceneries = require('../models/Sceneries');

// Defined store route
sceneriesRoutes.route('/add').post(function (req, res) {
  console.log(req.body);
  let sceneries = new Sceneries(req.body);
  
  sceneries.save()
    .then(sceneries => {
      res.status(200).json({'Sceneries': 'Sceneries has been added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
sceneriesRoutes.route('/').get(function (req, res) {
    Sceneries.find(function (err, sceneries2){
    if(err){
      console.log(err);
    }
    else {
      res.json(sceneries2);
    }
  });
});

module.exports = sceneriesRoutes;