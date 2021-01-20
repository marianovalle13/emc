'use strict';

// Define schema
module.exports = (module) => {

	/**
	 * Schema
	 */
	module.schema = new global.database.mongodb.mongoose.Schema({
		id: { type: String },
		name: { type: String, required: true },
		video: { type: String },
		order: { type: Number, required: true, unique: true },
		ui: {
			background: { type: String },
			icon: { type: String },
		},
		code: {
			type: String,
			required: true,
			/*
			* OOC - Out of conscience - Perdida de conciencia no recuperada
			* SRD - Severe respiratory distress - Dificultad respiratoria severa
			* LH - Large hemorrhages - Grandes hemorragias
			* STROKE - Stroke - Accidente cerebro vascular
			* CP - Chest pain - Dolor en el pecho
			* OTHER - Other - OTRO
			*/
			enum: ['OTHER', 'STROKE', 'OOC', 'SRD', 'LH', 'CP'],
			unique: true
		},
		color: {
			type: String,
			required: true,
			enum: ['RED', 'YELLOW', 'GREEN']
		},
	}, {
		timestamps: true
	});

};
