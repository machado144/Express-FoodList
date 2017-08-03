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
  totalPrice: {
    type: Number,
    required: [true, 'totalPrice is a mandatory field']
  }
});
//
// ComboSchema.virtual('totalPrice').get(function() {
//   let price = 0.00;
//   this.foods.map((f)=> price+=f.price);
//   return _.floor(price, 2);
// });
//
// ComboSchema.virtual('itemsCount').get(function() {
//   return this.foods.length;
// });

const Combo = mongoose.model('combo', ComboSchema);

module.exports = Combo;
