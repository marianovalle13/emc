'use strict';

// Define schema
module.exports = (module) => {

	/**
	 * Schema
	 */
	module.schema = new global.database.mongodb.mongoose.Schema({
		id: { type: String },
		conversation: { type: global.database.mongodb.mongoose.Schema.Types.ObjectId, ref: 'conversations', required: true },
		body: { type: String, required: true },
		author: { type: String, required: true },
	}, {
		timestamps: true
	});
};
