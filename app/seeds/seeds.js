const faker = require('faker');
const _ = require('lodash');

module.exports = {

  combos: () => {
    let firstItem = _.floor((_.random(1.1, 10.9)), 2);
    let secondItem = _.floor((_.random(1.1, 10.9)), 2);
    let thirdItem = _.floor((_.random(1.1, 10.9)), 2);
    let totalPrice = _.floor(
      _.sum([firstItem, secondItem, thirdItem]), 2
    );
    return {
      name: `Combo ${faker.name.firstName()}`,
      foods: [
        {
          name: `Food ${faker.name.firstName()}`,
          price: firstItem,
          size: _.sample(['P', 'M', 'G', 'Default']),
          refillable: _.sample([true, false])
        },
        {
          name: `Food ${faker.name.firstName()}`,
          price: secondItem,
          size: _.sample(['P', 'M', 'G', 'Default']),
          refillable: _.sample([true, false])
        },
        {
          name: `Food ${faker.name.firstName()}`,
          price: thirdItem,
          size: _.sample(['P', 'M', 'G', 'Default']),
          refillable: _.sample([true, false])
        },
      ],
      totalPrice: totalPrice
    }
  },

  foods: () => {
    return {
      name: `Food ${faker.name.firstName()}`,
      size: _.sample(['P', 'M', 'G', 'Default']),
      spicy: _.sample(['Light', 'Medium', 'Hot']),
      price: _.floor((_.random(1.1, 10.9)), 2),
      drinkable: _.sample([true, false]),
      refillable: _.sample([true, false]),
      ingredients: [
        {
          name: `Ingredient ${faker.name.firstName()}`,
          isExpired: _.sample([true, false])
        },
        {
          name: `Ingredient ${faker.name.firstName()}`,
          isExpired: _.sample([true, false])
        },
        {
          name: `Ingredient ${faker.name.firstName()}`,
          isExpired: _.sample([true, false])
        }
      ]
    }
  },

}
