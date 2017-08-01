const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _ = require('lodash');

const FoodSchema = new Schema({
  name: {
    type: String,
    validate: {
      validator: (name) => name.length > 3,
      message: 'The field name must contains at least 3 chars'
    },
    required: [true, 'The name field is mandatory']
  },
  price: {
    type: Number,
    required: [true, 'The price field is mandatory']
  },
  size: {
    type: String,
    enum: ['P', 'M', 'G', 'Default'],
    required: [true, 'The size field is mandatory']
  },
  spicy: {
    type: String,
    enum: ['Light', 'Medium', 'Hot']
  },
  drinkable: {
    type: Boolean,
    required: [true, 'The drinkable option is a mandatory field'],
    default: false
  },
  refillable: {
    type: Boolean,
    required: [true, 'The refillable option is a mandatory field'],
    default: false
  }
});

const Food = mongoose.model('food', FoodSchema);

module.exports = Food;
