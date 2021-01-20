'use strict';

// Define schema
module.exports = (module) => {

  /**
   * Schema
   */
  module.schema = new global.database.mongodb.mongoose.Schema({
    id: { type: String },
    zone: { type: String, required: true, unique: true },
    type: { type: String },
    comment: { type: String },
  }, {
    timestamps: true
  });
};