'use strict';

// Define schema
module.exports = (module) => {

	/**
	 * Schema
	 */
	module.schema = new global.database.mongodb.mongoose.Schema({
		id: { type: String },
		name: { type: String, unique: true },
		description: { type: String },
		link: { type: String, required: true },
		type: {
			type: String, enum: [
				'Teórico', 'Presencial'
			], required: true
		},
	}, {
		timestamps: true
	});

};
