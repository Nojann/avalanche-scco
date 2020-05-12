const express = require('express');
const app = express();
const sceneriesRoutes = express.Router();

// Require Product model in our routes module
let Sceneries = require('../models/Sceneries');

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

// Defined delete | remove | destroy route
sceneriesRoutes.route('/delete/:id').get(function (req, res) {
  Sceneries.findByIdAndRemove({_id: req.params.id}, function(err, sceneries2){
      if(err) res.json(err);
      else () => {
        res.json('Successfully removed');
        console.log('Successfully removed');
      };
  });
});

sceneriesRoutes.route('/replaceOne/:id').post(function (req, res) {
  Sceneries.replaceOne({_id: req.params.id}, req.body, function(err, sceneries2){
    if(err) () => {
      res.json(err);
      console.log('Error : ', err);
    }

    else () => {
      res.json('Successfully replaceOne');
      console.log('Successfully replaceOne');
    };
});

/* Defined store route
sceneriesRoutes.route('/add').post(function (req, res) {
  //console.log(req.body);
  let sceneries = new Sceneries(req.body);
  
  sceneries.save()
    .then(sceneries => {
      console.log('Sceneries has been added successfully');
      res.status(200).json({'Sceneries': 'Sceneries has been added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});*/
});
  

module.exports = sceneriesRoutes;