'use strict';

// Define schema
module.exports = (module) => {

	/**
	 * Schema
	 */
	module.schema = new global.database.mongodb.mongoose.Schema({
		id: { type: String },
		// Prepaid health coverage
		phc: { type: global.database.mongodb.mongoose.Schema.Types.ObjectId, ref: 'phcs', required: true },
		name: { type: String, required: true, unique: true },
	}, {
		timestamps: true
	});

};
