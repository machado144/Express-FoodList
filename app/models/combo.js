const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const FoodSchema = require('./foodSchema');
const _ = require('lodash');

const ComboSchema = new Schema({
  name: {
    type: String,
    validate: {
      validator: (name) => name.length > 3,
      message: 'The combo name must contain at least 3 chars!'
    },
    required: [true, 'Name is a mandatory field']
  },
  foods: [FoodSchema],
  id: false
});

ComboSchema.set('toJSON', {
  virtuals: true
});

ComboSchema.virtual('totalPrice').get(function () {
  let price = 0.00;
  this.foods.map((f) => price+=f.price);
  price = _.floor(price, 2)
  return price
});

const Combo = mongoose.model('combo', ComboSchema);

module.exports = Combo;
