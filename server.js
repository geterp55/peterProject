var express = require('express');
var app = express();
var bodyparser = require('body-parser');
// var meothodOverride = require('method-override');//need to install npm
var router = express.Router();
var mongoose = require('mongoose');

var app = express();
console.log("hello, is this thing on");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.use(express.static('public'));
// app.use(bodyParser.urlencoded({extended: true}));



//Database config with mongoose
mongoose.connect('mongodb://localhost/petergdb');
var db = mongoose.connection;

// show any mongoose errors
db.on('error', function(err) {
	console.log('Mongoose Error: ', err);
});

// once logged into the db through mongoose, log a success message
db.once('open', function() {
	console.log('Mongoose connection successful.');
});

// Bring in our Models: sales
var SalesModel = require('./models/sales.js');
var QuotedModel = require('./models/quoted.js');
// Create a new Sales by using the Salesmodel as a class.
// The "unique" rule in the sales model's schema
// will preven duplicate sales from being added to the server.
// Otherwise this program wouldn't work as we'd want it to.
// Below will use var SalesModel to bridge the format and the data from mongoose 
// connect and save into the databas.
// var exampleSales = new SalesModel({
// 	Revenue: 678.96,
// 	Month: 8

// });

// exampleSales.save(function(err, doc) {
// 	if(err) {
// 		console.log(err);
// 	}
// 	else {
// 		console.log('created new doc:', doc);
// 	}
// });



// var exampleQuoted = new QuotedModel({
// 	name: "Pedro",
// 	quote: "hello yo!"
// });

// exampleQuoted.save(function(err, doc) {
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log('created new doc:', doc);
// 	}
// });



//Routes
//====================================================================


app.get('/', function(req, res) {
	console.log("im working?");
	res.send(index.html);
});




//lists out all the Sales data in json on html page 
//NEED TO FIGURE OUT HOW TO NOT ADD ANYMORE DATA INTO DATABASE UNLESS A NEW MONTH WITH SALES INFO
//HAS OCCURRED
app.get('/sales', function(req, res) {
	SalesModel.find({}, function(err, doc){
		if(err){
			res.send(err);
		} else {
			res.send(doc);
		}
	});
});


// submit the quote and name data the user entered in html form then redirect to the index.html page
app.post('/submit', function(req, res){
	var newQuote = new QuotedModel(req.body);
	console.log(req.body);
	newQuote.save(function(err, doc) {
		if (err) {
			res.send(err);
		} else {
				res.redirect("/");
		}	
	});
});


// this lists out all the data from the quote model
app.get('/quoted', function(req, res) {
	QuotedModel.find({}, function(err, doc) {
		if(err){
			res.send(err);
		} else {
			res.send(doc);
		}
	});
});


app.listen(3000, function(){
	console.log('App running on port 3000!');
});
