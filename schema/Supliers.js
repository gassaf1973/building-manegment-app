const mongoose = require('mongoose');
var Float = require('mongoose-float').loadType(mongoose, 2);
var timestamps = require('mongoose-timestamp');

var SupliersSchema = mongoose.Schema({
	_id: {
		type: Number,
		required: true,
	},
	tier_name: {
		type: String,
		trim: true,
		required: true
	},
	address1: String,
	address2: String,
	mobile: String,
	phone: String,
	email: String,
	family_tier_id: Number,
});

SupliersSchema.plugin(timestamps);

module.exports = mongoose.model('Supliers', SupliersSchema);