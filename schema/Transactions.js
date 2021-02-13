const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');

var TransactionsSchema = mongoose.Schema({
	_id: {
		type: Number,
		required: true,
		unique: true,
	},
	product_name: {
		type: String,
		trim: true,
		required: true
	},
	unit_price: {
		type: Number,
		default: 0,
	},
	tva1: {
		type: String,
		trim: true,
	},
	tva2: {
		type: String,
		trim: true,
	},
	family_id: {
		type: Number,
	},
})

module.exports = mongoose.model('Transactions', TransactionsSchema);