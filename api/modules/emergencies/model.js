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
		collaborator: {
			type: global.database.mongodb.mongoose.Schema.Types.ObjectId,
			ref: 'umacs'
		},
		ailment: { type: String, enum: [
			'pain',
			'burning',
			'wound',
			'trauma',
			'other'
			],
			required: true
		},
		bodyPart: { type: String },
		medicines: [{
			medicine: {
				type: global.database.mongodb.mongoose.Schema.Types.ObjectId,
				ref: 'medicines'
			},
			quantity: { type: Number },
		}],
		emergencyType: {
			type: global.database.mongodb.mongoose.Schema.Types.ObjectId,
			ref: 'emergencyTypes',
			required: true
		},
		status: {
			type: String, enum: [
				'open',
				'pending',
				'reviewed',
				'finished'
			],
			default: 'open',
			required: true
		},
		atentionTime: {
			start: { type: String },
			end: { type: String },
		},
		patientStatus: {
			dead: { type: Boolean },
			away: { type: Boolean },
			staysHome: { type: Boolean },
			derived: { type: Boolean },
		},
		diagnostic: { type: String },
		comments: { type: String },
	}, {
		timestamps: true
	});

};
