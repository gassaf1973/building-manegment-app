const mongoose = require('mongoose');

var valuesSchema = mongoose.Schema({
	_id: Number,
	label: {
		type: String,
		trim: true,
		unique: true,
		required: true
	},
})

var referenceSchema = mongoose.Schema({
	reference: {
		name: String,
		values: [valuesSchema],
	}
}, { timestamps: { createdAt: 'created_at' } })


module.exports = mongoose.model('References', referenceSchema);