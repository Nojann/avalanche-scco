const express = require('express');
const app = express();
const userDataRoutes = express.Router();

// Require Product model in our routes module
let UserData = require('../models/UserData');

// Defined store route
userDataRoutes.route('/add').post(function (req, res) {
  let userData = new UserData(req.body);
  userData.save()
    .then(userData => {
      res.status(200).json({'UserData': 'UserData has been added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
userDataRoutes.route('/').get(function (req, res) {
  UserData.find(function (err, userDatas){
    if(err){
      console.log(err);
    }
    else {
      res.json(userDatas);
    }
  });
});

/*
// Defined edit route
productRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Product.findById(id, function (err, product){
      res.json(product);
  });
});

//  Defined update route
productRoutes.route('/update/:id').post(function (req, res) {
  Product.findById(req.params.id, function(err, product) {
    if (!product)
      res.status(404).send("Record not found");
    else {
      product.ProductName = req.body.ProductName;
      product.ProductDescription = req.body.ProductDescription;
      product.ProductPrice = req.body.ProductPrice;

      product.save().then(product => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
productRoutes.route('/delete/:id').get(function (req, res) {
    Product.findByIdAndRemove({_id: req.params.id}, function(err, product){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});
*/

module.exports = userDataRoutes;