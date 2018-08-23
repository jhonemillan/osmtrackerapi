
let mongoose = require('mongoose');
var GeoJSON = require('mongoose-geojson-schema');
let Schema = mongoose.Schema;

var pointSchema = new Schema({
    email: {
      type: String,
      unique: true,
      required: true
    },
    comment: {
      type: String,
      required: true
    },
    
    location: {
        type: Point,
        required: true
    }

  });