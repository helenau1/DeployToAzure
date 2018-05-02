const mongoose = require('mongoose');

const trailsSchema = new mongoose.Schema({name:String, type:String});
const speciesSchema = new mongoose.Schema({Place:String, Plants:Number, Birds:Number, Mammals:Number});

mongoose.model('trails', trailsSchema);
mongoose.model('species', speciesSchema);


