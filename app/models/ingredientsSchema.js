const mongoose = require('mongoose'),
      Schema   = mongoose.Schema,
      _        = require('lodash');

const IngredientSchema = new Schema({
  name: {
    type: String,
    validate: {
      validator: (name) => name.length > 3,
      message: 'Name must contains at least 3 chars'
    },
    required: [true, 'Name is a mandatory field']
  },
  isExpired: {
    type: Boolean,
    required: [true, 'The isExpired option is mandatory']
  }
});

module.exports = IngredientSchema;
