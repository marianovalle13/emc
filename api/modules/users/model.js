'use strict';

// Define schema
module.exports = (module) => {

	/**
	 * Schema
	 */
	module.schema = new global.database.mongodb.mongoose.Schema({
		id: { type: String },
		phc: { type: global.database.mongodb.mongoose.Schema.Types.ObjectId, ref: 'phcs' },
		phcp: { type: global.database.mongodb.mongoose.Schema.Types.ObjectId, ref: 'phcps' },
		username: { type: String, unique: true, required: true },
		password: { type: String, required: true },
		fullName: { type: String, required: true },
		gender: { type: String },
		birthDate: { type: Date },
		picture: { type: String },
		phoneNumber: { type: String },
		dni: { type: String, required: true, unique: true },
		emailAddress: { type: String, unique: true },
		address: { type: String },
		addressGoogle: { type: String },
		location: {
			type: {
				type: String,
				enum: ['Point'], // 'location.type' must be 'Point'
				//	default: 'Point',
			},
			coordinates: {
				type: [Number], //coordinates: [-104.9903, 39.7392] longitude first and then latitude
			}
		},
		familiarGroup: [
			{
				fullName: { type: String },
				birthDate: { type: Date },
				gender: { type: String },
			}
		],
		 medicalRecord:[
			 {
				disease: {type:String},
				commentary:{type:String}
			 }
		 ],
		//  { modifique medicalRecord pq las enfermedades no van a venir de la api externa, las va ingresar el usuario
		// 	diseases: [Object],
		// 	commentary: { type: String },
		// },
		status: { type: Number },
		enabled: { type: Boolean },
		roles: [{
			type: String,
			allowNull: false
		}]
	}, {
		timestamps: true
	});

	module.schema.index({ address: "2dsphere" });


	module.schema.post('validate', (doc) => {
		const role = 'user';
		if (!doc.roles.includes(role)) {
			doc.roles.push(role);
		}
	});

};