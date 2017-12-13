const mongoose         = require('mongoose'),
      Schema           = mongoose.Schema,
      IngredientSchema = require('./ingredientsSchema');

const FoodsSchema = new Schema({
  name: {
    type: String,
    validate: {
      validator: (name) => name.length > 3,
      message: 'The field name must contains at least 3 chars'
    },
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
  },
  image: {
    type: String,
    required: false
  },
  ingredients: [IngredientSchema]
});

const Food = mongoose.model('food', FoodsSchema);

module.exports = Food;
