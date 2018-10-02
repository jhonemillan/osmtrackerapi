
let mongoose = require('mongoose');
var GeoJSON = require('mongoose-geojson-schema');
let Schema = mongoose.Schema;

var pointSchema = new Schema({    
    location:{      
      geometry : {        
        coordinates : {
            type : [Number],           
            required : true
        },
        type: {type: String},
    },
    type: {type: String}
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