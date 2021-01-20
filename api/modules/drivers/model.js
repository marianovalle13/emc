'use strict';

// Define schema
module.exports = (module) => {

  /**
   * Schema
   */
  module.schema = new global.database.mongodb.mongoose.Schema({
    id: { type: String },
    courses: [
      { type: global.database.mongodb.mongoose.Schema.Types.ObjectId, ref: 'courses' }
    ],
    fullName: { type: String, required: true },
    emailAddress: { type: String },
    phoneNumber: { type: String },
    frontDNI: { type: String },
    backDNI: { type: String },
    cv: { type: String },
    criminalRecord: { type: String },
    drivingLicense: { type: String },
    enabled: { type: Boolean },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  }, {
    timestamps: true
  });
};