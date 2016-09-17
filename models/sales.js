//require mongoose
var mongoose = require('mongoose');

// create a Schema class with mongoose
var Schema = mongoose.Schema;

//make SalesSchema

var SalesSchema = new Schema({
	sales: {
		type: Number
	},
	month: {
		type: Number
	},
	year: {
		type: Number
	}
});

//create the Sales model with SalesSchema
var Sales = mongoose.model('Sales', SalesSchema);

module.exports = Sales;