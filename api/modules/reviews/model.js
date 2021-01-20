'use strict';

// Define schema
module.exports = (module) => {

	/**
	 * Schema
	 */
	module.schema = new global.database.mongodb.mongoose.Schema({
		id: { type: String },
		user: {
			type: global.database.mongodb.mongoose.Schema.Types.ObjectId,
			ref: 'users',
			required: true
		},
		emergency: {
			type: global.database.mongodb.mongoose.Schema.Types.ObjectId,
			ref: 'emergencies',
			required: true
		},
		medic: {
			type: global.database.mongodb.mongoose.Schema.Types.ObjectId,
			ref: 'medics'
		},
		nurse: {
			type: global.database.mongodb.mongoose.Schema.Types.ObjectId,
			ref: 'nurses'
		},
		driver: {
			type: global.database.mongodb.mongoose.Schema.Types.ObjectId,
			ref: 'drivers'
		},
		umac: {
			type: global.database.mongodb.mongoose.Schema.Types.ObjectId,
			ref: 'umacs'
		},
		/**
		 * medicCalification, nurseCalification,
		 * driverCalification, umacCalification
		 * User service scores based on each professional
		 */
		medicCalification: { type: Number, enum: [1, 2, 3, 4, 5] },
		nurseCalification: { type: Number, enum: [1, 2, 3, 4, 5] },
		driverCalification: { type: Number, enum: [1, 2, 3, 4, 5] },
		umacCalification: { type: Number, enum: [1, 2, 3, 4, 5] },
		/**
		 * collaboratorCalification
		 * Collaborator can score patient
		 */
		collaboratorCalification: {
			score: { type: Number, enum: [1, 2, 3, 4, 5] },
			comments: { type: String },
		},
	}, {
		timestamps: true
	});

};
