
let mongoose = require('mongoose');
var GeoJSON = require('mongoose-geojson-schema');
let Schema = mongoose.Schema;

var pointSchema = new Schema({
    id: {
      type: String,
      unique: false,
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