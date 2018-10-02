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

router.post('/getpoints', (req, res, next)=>{
    //console.log(req.body.geometry.coordinates);
    Point.find({ location: { 
        $geoWithin: { 
            $geometry: {
                type: 'Polygon',
                coordinates:
                    [ [
                        [ -76.51919982039546, 3.443944398846111 ],
                        [ -76.51147505843257, 3.443944398846111 ],
                        [ -76.51147505843257, 3.456281617074582 ],
                        [ -76.51919982039546, 3.456281617074582 ],
                        [ -76.51919982039546, 3.443944398846111 ] 
                    ]
                    ]   
                
            }
             }}},function (listPoints){
                console.log(listPoints);
                res.json(listPoints);
            });
    
});

router.get('/near',(req, res)=>{
    Point.find({
             location : {
                $near: {
                        $geometry: {
                            type: 'Point' ,
                            coordinates: [ -76.53486 , 3.446639 ]

                        },                                    
                        $maxDistance: 1000,
                        $minDistance: 10
                    },
                }
          },
    (data)=>{
        console.log('null data',data);
    });
});

router.get('/all', (req, res)=>{
    Point.find({})
    .then((data)=>{
        console.log(data[0].location.geometry.coordinates);
    })
});  


router.get('/neartemp',(req, res)=>{
    Point.find({
        location:
        { $near:
           {
             $geometry: { type: "Point",  coordinates: [ -73.9667, 40.78 ] },
             $minDistance: 1000,
             $maxDistance: 5000
           }
        }
          },
    (data)=>{
        console.log('null data',data);
    });
});




module.exports = router;