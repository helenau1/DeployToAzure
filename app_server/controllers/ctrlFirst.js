const request = require('request');
const apiURL = require('./apiURLs');

const showForm = function(req,res) {
   res.render('trails_add');
};

const addData = function(req,res) {
    const path = '/api/trails';

    const postdata = {
        name: req.body.name,
        type: req.body.type
    };

    const requestOptions = {
        url: apiURL.server + path,
        method: 'POST',
        json: postdata
    };

    request(
        requestOptions,
        function (err, response) {
            if (response.statusCode === 201) {
                res.redirect('/trails');
            } else {
                res.render('error', {message: 'Error adding data: ' +
                    response.statusMessage +
                    ' (' + response.statusCode + ') '});
            }
        }
    );
};

const dataset1 = function(req, res){
    const path = '/api/trails';
    const requestOptions = {
        url: apiURL.server + path,
        method: 'GET',
        json: {},
        qs: {}
    };

    request(
        requestOptions,
        function (err, response, body) {
            if (err) {
                res.render('error', {message: err.message});
            } else if (response.statusCode !== 200) {
                res.render('error', {message: 'Error accessing API: ' + response.statusMessage + " (" + response.statusCode + ") "});
            } else if (!(body instanceof Array)) {
                res.render('error', {message: 'Unexpected response data'});
            } else if (!body.length) {
                res.render('error', {message: 'No documents in collection'});
            } else {
                res.render('trails', {trails: body});
            }
        }
    );
};

module.exports = {
    dataset1,
    showForm,
    addData
};