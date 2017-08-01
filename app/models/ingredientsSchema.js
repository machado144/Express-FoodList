const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _ = require('lodash');

const IngredientSchema = new Schema({
  name: {
    type: String,
    validate: {
      validator: (name) => name.length > 3,
      message: 'Name must contains at least 3 chars'
    },
    required: [true, 'Name is a mandatory field']
  },
  price: {
    type: Number,
    validate: {
      validator: (number) => number > 0,
      message: 'The field price must be greater than $0,00'
    },
    required: [true, 'Price is a mandatory field']
  },
  size: {
    type: String,
    enum: ['P', 'M', 'G', 'Unique']
  },
  spicy: {
    type: String,
    enum: ['Light', 'Medium', 'Hot']
  },
  drinkable: {
    type: Boolean,
    required: [true, 'The drinkable option is mandatory']
  }
});

module.exports = IngredientSchema;
