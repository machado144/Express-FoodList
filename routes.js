const _ = require('lodash');
const express = require('express');
const mongoose = require('mongoose');
const mung = require('express-mung');
const jsonHandler = require('./app/middleware/json');
const headerHandler = require('./app/middleware/headers');
const getListValidator = require('./app/middleware/get_list');
const patchHandler = require('./app/middleware/patch_handler');
const foodsRoute = require('./app/routes/foods');
const foodByIdRoute = require('./app/routes/food_id');
const comboByIdRoute = require('./app/routes/combo_id');
const combosRoute = require('./app/routes/combos');
const router = express.Router();

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/taco_bell', {
  useMongoClient: true
});

mongoose.connection
  .once('open', () => {})
  .on('error', (error) => {
    console.warn('Warning', error);
  });

router.use(headerHandler);
router.use(jsonHandler);
router.use(patchHandler);
router.use(mung.json(getListValidator));

router.get('/', (req, res) => {
  res.json({ message: 'Welcome to Taco Bell Home!' });
});

router.route('/foods').get(foodsRoute.get);
router.route('/foods').post(foodsRoute.post);
router.route('/foods/:foods_id').get(foodByIdRoute.get);
router.route('/foods/:foods_id').put(foodByIdRoute.put);
router.route('/foods/:foods_id').patch(foodByIdRoute.patch);
router.route('/foods/:foods_id').delete(foodByIdRoute.delete);
router.route('/combos').get(combosRoute.get);
router.route('/combos').post(combosRoute.post);
router.route('/combos/:combo_id').get(comboByIdRoute.get);
router.route('/combos/:combo_id').put(comboByIdRoute.put);
router.route('/combo/:combo_id').patch(comboByIdRoute.patch);
router.route('/combos/:combo_id').delete(comboByIdRoute.delete);

module.exports = router;
