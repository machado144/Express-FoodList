const seedsRun         = require('./app/seeds/seeds_config'),
      express          = require('express'),
      mongoose         = require('mongoose'),
      mung             = require('express-mung'),
      jsonHandler      = require('./app/middleware/json'),
      headerHandler    = require('./app/middleware/headers'),
      getListValidator = require('./app/middleware/get_list'),
      patchHandler     = require('./app/middleware/patch_handler'),
      foodsRoute       = require('./app/routes/foods'),
      foodByIdRoute    = require('./app/routes/food_id'),
      comboByIdRoute   = require('./app/routes/combo_id'),
      combosRoute      = require('./app/routes/combos'),
      envConfig        = require('./app/seeds/env_config'),
      router           = express.Router();

mongoose.Promise = global.Promise;

mongoose.connect(`mongodb://localhost/food_list${envConfig()}`);

mongoose.connection
  .once('open', () => seedsRun(mongoose))
  .on('error', (error) => {
    console.warn('Warning', error);
  });

router.use(headerHandler);
router.use(jsonHandler);
router.use(patchHandler);
router.use(mung.json(getListValidator));

router.get('/', (req, res) => {
  res.json({ message: 'Welcome to FoodList Home!' });
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
router.route('/combos/:combo_id').patch(comboByIdRoute.patch);
router.route('/combos/:combo_id').delete(comboByIdRoute.delete);

module.exports = router;
