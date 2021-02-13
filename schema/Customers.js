const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');

let CustomersSchema = mongoose.Schema({
	_id: {
		type: Number,
		required: true,
	},
	customer_name: {
		type: String,
		trim: true,
		required: true
	},
	address1: String,
	address2: String,
	mobile: String,
	phone: String,
	email: String,
});

CustomersSchema.plugin(timestamps);

module.exports = mongoose.model('Customers', CustomersSchema);