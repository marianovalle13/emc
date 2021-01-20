'use strict';

// Define schema
module.exports = (module) => {

	/**
	 * Schema
	 */
	module.schema = new global.database.mongodb.mongoose.Schema({
		id: { type: String },
		name: { type: String, required: true, unique: true },
		vehicleBrand: {
			type: global.database.mongodb.mongoose.Schema.Types.ObjectId,
			ref: 'vehicleBrands', required: true
		},
	}, {
		timestamps: true
	});

};
