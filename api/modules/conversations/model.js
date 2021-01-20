'use strict';

// Define schema
module.exports = (module) => {

	/**
	 * Schema
	 */
	module.schema = new global.database.mongodb.mongoose.Schema({
		id: { type: String },
		user: { type: global.database.mongodb.mongoose.Schema.Types.ObjectId, ref: 'users' },
		collaborator: { type: global.database.mongodb.mongoose.Schema.Types.ObjectId, ref: 'umacs' },
		messages: [
			{ type: global.database.mongodb.mongoose.Schema.Types.ObjectId, ref: 'messages' }
		],
		improper: { type: Boolean, default: false },
		blocked: { type: Boolean, default: false },
		improperBy: { type: String },
		blockedBy: { type: String },
		available: { type: Boolean, default: true },
	}, {
		timestamps: true
	});
};
