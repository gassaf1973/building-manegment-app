const mongoose = require('mongoose');

var counterSchema = mongoose.Schema({
	_id: String,
    sequence_value: {
		type: Number, default: 1,
	},
})

module.exports = mongoose.model('Counters', counterSchema);