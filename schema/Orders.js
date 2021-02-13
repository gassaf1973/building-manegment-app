const mongoose = require('mongoose');
var Float = require('mongoose-float').loadType(mongoose, 2);
var timestamps = require('mongoose-timestamp');

var OrdersSchema = mongoose.Schema({
	_id: {
		type: Number,
		required: true,
	},
	order_name: {
		type: String,
		trim: true,
		required: true
	},
	date: {
		type: Date,
		required: true
	},
	unit_price: {
		type: Float,
	},
	discount: {
		type: Float,
	},
	total_order: {
		type: Float,
		required: true
	},
	total_transaction: {
		type: Float,
	},
	balance: {
		type: Float,
	},
	tier_id: {
		type: Number,
		required: true
	},
	project_id: {
		type: Number,
		required: true
	},
	product_id: {
		type: Number,
		required: true
	},
	comment: String,
	validate_by: String,
	validate_date: Date,
	status: String,
})

OrdersSchema.plugin(timestamps);

module.exports = mongoose.model('Orders', OrdersSchema);