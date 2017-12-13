const mongoose   = require('mongoose'),
      Schema     = mongoose.Schema,
      FoodSchema = require('./food'),
      _          = require('lodash');

const ComboSchema = new Schema({
  name: {
    type: String,
    validate: {
      validator: (name) => name.length > 3,
      message: 'The combo name must contain at least 3 chars!'
    },
    required: [true, 'Name is a mandatory field']
  },
  foods: [{
    type: Schema.Types.ObjectId,
    ref: 'food'
  }],
  id: false
});

ComboSchema.set('toJSON', { virtuals: true });

ComboSchema.virtual('totalPrice').get(function () {
  let price = 0.00;
  this.foods.map((f) => price+=f.price);
  price = _.floor(price, 2)
  return price
});

const Combo = mongoose.model('combo', ComboSchema);

module.exports = Combo;
