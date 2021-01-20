'use strict';

// Define schema
module.exports = (module) => {

  /**
   * Schema
   */
  module.schema = new global.database.mongodb.mongoose.Schema({
    id: { type: String },
    vehicleBrand: {
      type: global.database.mongodb.mongoose.Schema.Types.ObjectId,
      ref: 'vehicleBrands', required: false
    },
    vehicleModel: {
      type: global.database.mongodb.mongoose.Schema.Types.ObjectId,
      ref: 'vehicleModels', required: false
    },
    vehicleType: {
      type: global.database.mongodb.mongoose.Schema.Types.ObjectId,
      ref: 'vehicleTypes', required: false
    },
    vehicleInsurance: {
      type: global.database.mongodb.mongoose.Schema.Types.ObjectId,
      ref: 'vechicleInsurances', required: false
    },
    equipments: [
      { type: global.database.mongodb.mongoose.Schema.Types.ObjectId, ref: 'equipments' }
    ],
    collaborators: {
      medic: { type: global.database.mongodb.mongoose.Schema.Types.ObjectId, ref: 'medics' },
      nurse: { type: global.database.mongodb.mongoose.Schema.Types.ObjectId, ref: 'nurses' },
      driver: { type: global.database.mongodb.mongoose.Schema.Types.ObjectId, ref: 'drivers' },
    },
    fullName: { type: String, required: false},
    emailAddress: { type: String, required: false},
    phoneNumber: { type: String, required: false},
    insuranceFile: { type: String, required: false},
    domain: { type: String },
    status: {
      type: String, enum: [
        'idle',
        'busy',
        'waitingForApproval' // Register
      ]
    },
    enabled: { type: Boolean, default: false },
    username: { type: String, unique: true },
    password: { type: String },
    roles: [{
			type: String,
			allowNull: false
		}]
  }, {
    timestamps: true
  });

  module.schema.post('validate', (doc) => {
		const role = 'umac';
		if (!doc.roles.includes(role)) {
			doc.roles.push(role);
		}
	});
};
