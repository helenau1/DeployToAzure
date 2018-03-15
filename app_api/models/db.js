const mongoose = require('mongoose');
const dbURI = 'mongodb://helenau:Password9@ds251988.mlab.com:51988/nature';
mongoose.connect(dbURI);

//connection status message
mongoose.connection.on('connected', function() {
    console.log(`Mongoose connected to ${dbURI}`);
});

mongoose.connection.on ('error', function(err){
    console.log('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', function() {
    console.log('Mongoose disconnected');
});

require('./appSchemas');