//get access to the database connection
const mongoose = require('mongoose');

//get access to the 'trails' model to interact with trails collection
const trailsModel = mongoose.model('trails');

const trailsList = function (req, res) {
    trailsModel.find({}, function(err, trails) {
        if(err) {
            res.status(404).json(err);
        }
        else {
            res.status(200).json(trails);
        }
    });
};

const addTrails = function (req, res){
    trailsModel.create(req.body, function(err, newTrail){
        if(err) {
            res.status(400).json(err);
        }
        else {
            res.status(201).json(newTrail);
        }
    });

};
module.exports = {
    trailsList,
    addTrails
};