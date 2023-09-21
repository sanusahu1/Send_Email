const express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var assert = require('assert');
var mongo = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
const app = express();

app.set('port', (process.env.PORT || 7010));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// var ObjectId = new ObjectID();
// ROUTES
var authroute = require('./routes/auth_route');

//Database
var dbb = require('./config/collection');
var prod = true;
if (prod) {
    var prod_url = require('./config/connection');
    url = prod_url;
}
//Database

//Configuring Routes
authroute.configure(app, mongo, ObjectId, url, assert, dbb);


app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});

app.get('/', function (req, res) {
    res.send("Welcome Back");
});