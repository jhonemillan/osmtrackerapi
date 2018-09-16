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
    console.log(req.body.geolocation);
    Point.create({ user_id: req.body.user_id,
                  comment: req.body.comment,
                  location: req.body.geolocation
                 })
    .then((point)=>{
        res.json(point);
    })
    .catch((err)=>{
        return next(err);
    });
});

router.get('/getpoints', (req, res, next)=>{
    Point.find({ location: { $geoWithin: { $geometry: req.body.geometry }}})
    .then((listPoints)=>{
        res.json(listPoints);
    });
});



module.exports = router;