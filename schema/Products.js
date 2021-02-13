const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');

var ProductsSchema = mongoose.Schema({
	_id: {
		type: Number,
		required: true,
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

ProductsSchema.plugin(timestamps);

module.exports = mongoose.model('Products', ProductsSchema);