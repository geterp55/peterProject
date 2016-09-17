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




//Routes
//====================================================================


app.get('/', function(req, res) {
	console.log("im working?");
	res.send(index.html);
});


'/movies/db/keywdad&date'

//lists out all the Sales data in json on html page 
//make the routes more specific on the data it will produce
app.get('/sales/', function(req, res) {
	console.log("hit");
	// var year = req.params.year;
	// console.log(year);
	// console.log(typeof year);


	SalesModel.find({year : 2016}, function(err, doc){

		var total = {
			myData2016 : [],
			myData2015 : []
		}

		if(err){
			res.send(err);
		} else {
			//push 2016 mongo data into total.myData 2016 empty array 
			for (var i = 0;i < doc.length;i++){
				total.myData2016[i] = doc[i].sales
			}

			SalesModel.find({year : 2015}, function(err, doc){
				if(err) {
					res.send(err);
				} else {
					
					for (var i = 0;i < doc.length;i++){
					total.myData2015[i] = doc[i].sales		
				}

				res.send(total);
			}
			
			
		});
	};



		// submit the quote and name data the user entered in html form then redirect to the index.html page
		app.post('/submit', function(req, res){
			var newQuote = new QuotedModel(req.body);
			console.log(req.body);
			console.log(req.query);
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

	});
});


app.listen(3000, function(){
	console.log('App running on port 3000!');
});