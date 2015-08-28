// server.js

var express  = require('express');
var app      = express();                       			// create our app w/ express
var mongoose = require('mongoose');             	       // mongoose for mongodb
var morgan = require('morgan');         				  // log requests to the console (express4)
var bodyParser = require('body-parser');				 // pull information from HTML POST (express4)
var methodOverride = require('method-override');	    // simulate DELETE and PUT (express4)
var path = require("path");
var port = process.env.PORT || 8080;

// configuration ===========================================
    
var db = require('./config/db');
// connect to our mongoDB database 
mongoose.connect(db.url);

app.use(express.static(__dirname + '/auth')); 
app.use(express.static(__dirname + '/assets'));  // set the static files location /public/img will be /img for users
  	
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

app.engine('html', require('ejs').renderFile);
app.set('views', path.resolve(__dirname, 'auth'));

app.get('/', function(req, res){
		res.render('auth.html');
	});

app.listen(port,process.env.IP);
console.log('Server running on port: ' + port);