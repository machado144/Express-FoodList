const mongoose = require('mongoose'),
      Schema   = mongoose.Schema;

const FoodSchema = new Schema({
  name: {
    type: String,
    required: [true, 'The field name is mandatory']
  },
  price: {
    type: Number,
    required: [true, 'The field price is mandatory']
  },
  size: {
    type: String,
    enum: ['P', 'M', 'G', 'Default'],
    required: [true, 'The field size is mandatory']
  },
  refillable: {
    type: Boolean,
    required: [true, 'The refillable option is a mandatory field'],
    default: false
  },
  image: {
    type: String,
    required: false
  }
});

module.exports = FoodSchema;
