'use strict';

// Define schema
module.exports = (module) => {

	/**
	 * Schema
	 */
	module.schema = new global.database.mongodb.mongoose.Schema({
		id: { type: String },
		title: { type: String, unique: true },
		subtitle: { type: String },
		text: { type: String },
		image: { type: String },
		link: { type: String },
	}, {
		timestamps: true
	});

};
