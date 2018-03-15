//get access to the database connection
const mongoose = require('mongoose');

//get access to the 'trails' model to interact with trails collection
const speciesModel = mongoose.model('species');

const speciesList = function (req, res) {
    speciesModel.find({}, function(err, species) {
        if(err) {
            res.status(404).json(err);
        }
        else {
            res.status(200).json(species);
        }
    });
};

const addSpecies = function (req, res){
    speciesModel.create(req.body, function(err, newSpecies){
        if(err) {
            res.status(400).json(err);
        }
        else {
            res.status(201).json(newSpecies);
        }
    });

};

module.exports = {
    speciesList,
    addSpecies
};