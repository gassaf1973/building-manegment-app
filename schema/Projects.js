const mongoose = require('mongoose');
var Float = require('mongoose-float').loadType(mongoose, 2);
var timestamps = require('mongoose-timestamp');

var ProjectsSchema = mongoose.Schema({
	_id: {
		type: Number,
		required: true,
	},
	project_name: {
		type: String,
		trim: true,
		required: true
	},
	start_date: Date,
	end_date: Date,
	cost: {
		type: Float,
	},
	sale: {
		type: Float,
	},
	rest_to_pay: {
		type: Float,
	},
	margin: {
		type: Float,
	},
	region_id: Number,
	project_status_id: Number,
	project_type_id: Number
})

ProjectsSchema.plugin(timestamps);

module.exports = mongoose.model('Projects', ProjectsSchema);