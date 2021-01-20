'use strict';

// Define schema
module.exports = (module) => {

	/**
	 * Schema
	 */
	module.schema = new global.database.mongodb.mongoose.Schema({
		id: { type: String },
		token: { type: String, unique: true },
		reference: { }
	}, {
		timestamps: true
	});

};
