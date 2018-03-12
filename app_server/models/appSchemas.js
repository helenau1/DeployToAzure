const mongoose = require('mongoose');

const trailsSchema = new mongoose.Schema({name:String, type:String});
const speciesSchema = new mongoose.Schema({type:String, amount:String});

mongoose.model('trails', trailsSchema);
mongoose.model('species', speciesSchema);

