var express = require('express');
var router = express.Router();
var Point = require('../models/point');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Point.find().then((data)=>{
      res.json(data);
  })
  .catch((err)=>{
      return next(err);
  });  
});

router.post('/add', function(req, res, next){
    Point.create(req.body)
    .then((point)=>{
        res.json(point);
    })
    .catch((err)=>{
        return next(err);
    });
});



module.exports = router;