var mongoose = require('mongoose');
let dbURI = 'mongodb://developer:fenix07@ds135433.mlab.com:35433/crimetracker';
mongoose.Promise = require('bluebird');
mongoose.connect(dbURI, { promiseLibrary: require('bluebird') })

mongoose.connection.on('connected', function () {  
  console.log('Mongoose default connection open to ' + dbURI);
}); 

mongoose.connection.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {  
  console.log('Mongoose default connection disconnected'); 
});

process.on('SIGINT', function() {  
  mongoose.connection.close(function () { 
    console.log('Mongoose default connection disconnected through app termination'); 
    process.exit(0); 
  }); 
}); 
module.export = mongoose;