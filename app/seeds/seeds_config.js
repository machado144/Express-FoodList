const seeds = require('./seeds');
const Food = require('../models/food');
const Combo = require('../models/combo');

const seedsConfig = (mongooseObject) => {
  let collections = Object.keys(mongooseObject.connection.collections);
  collections.map((c) => {
    mongooseObject.connection.collections[c].drop(() => {});
  });
  if (process.env.ENV === 'Tests') {
    let count = 0;
    while (count < 10) {
      new Combo(seeds.combos()).save()
      new Food(seeds.foods()).save()
      count++
    }
  }
}

module.exports = seedsConfig;
