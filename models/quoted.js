//require mongoose
var mongoose = require('mongoose');

// create a Schema class with mongoose
var Schema = mongoose.Schema;

//make QuoteSchema

var quotedSchema = new Schema({
	names: {
		type: String
	},
	quote: {
		type: String
	}
});

//create the Quotes model with QuotedSchema
var quoted = mongoose.model('quoted', quotedSchema);

module.exports = quoted;