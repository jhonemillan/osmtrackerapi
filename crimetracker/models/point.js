
let mongoose = require('mongoose');
var GeoJSON = require('mongoose-geojson-schema');
let Schema = mongoose.Schema;

var pointSchema = new Schema({    
    location:{      
      type: {type: String},
      lat: {type: Number},
      lng: {type: Number}  
    },
    user_id: {
      type: String,
      unique: false,
      required: true
    },

    comment: {
      type: String,
      required: true
    }
  });

  module.exports = mongoose.model('geopoints', pointSchema);