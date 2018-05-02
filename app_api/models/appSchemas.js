const mongoose = require('mongoose');


//Schemas define the document structure used in the app
const trailsSchema = new mongoose.Schema ({name:String, type:String});
const speciesSchema = new mongoose.Schema({Place:String, Plants:Number, Birds:Number, Mammals:Number});

//models
mongoose.model('trails', trailsSchema, 'trails');
mongoose.model('species', speciesSchema, 'species');
