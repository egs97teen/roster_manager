// require mongoose
var mongoose = require('mongoose');

// create the schema
var PlayerSchema = new mongoose.Schema({
	name: {
		type: String,
		minlength: [2, "Name must be at least 2 characters in length"],
		required: [true, "Name is required"]
	},
	position: {
		type: String
	},
	game1: {
		type: String,
		'default': "undecided"
	},
	game2: {
		type: String,
		'default': "undecided"
	},
	game3: {
		type: String,
		'default': "undecided"
	}
	},
	{ timestamps: true }
);

var Player = mongoose.model('Player', PlayerSchema);