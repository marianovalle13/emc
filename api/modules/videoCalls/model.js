'use strict';

// Define schema
module.exports = (module) => {

	/**
	 * Schema
	 */
	module.schema = new global.database.mongodb.mongoose.Schema({
		id: { type: String },
		sessionId: { type: String, unique: true },
		referenceId: { type: global.database.mongodb.mongoose.Schema.ObjectId },
		referenceType: { type: String },
	}, {
		timestamps: true
	});

};
