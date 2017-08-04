const _ = require('lodash');
const Food = require('../models/food');
const Combo = require('../models/combo');
const messageFormat = require('../rules/message_format');

module.exports = {

  get: (req, res) => {
    let pages = _.toNumber(req.query.page);
    pages *= 10
    if (pages < 0)
      pages = 0

    Combo.find()
      .skip(pages)
      .limit(_.toNumber(req.query.limit))
      .then((combo) => res.json(combo))
      .catch((err) => res.status(res.statusCode).send(
        messageFormat.error(err, res.statusCode)
      ));
  },

  post: (req, res) => {

    let combo = new Combo;
    let price = 0.00;
    let message = `Combo ${req.body.name} created with success!`;

    combo.name = req.body.name;
    combo.foods = req.body.foods;
    req.body.foods.map((f) => price+=f.price);
    combo.totalPrice = _.floor(price, 2);

    combo.save()
      .then((combo) => res.status(201).send(
        messageFormat.success(message, 201)
      ))
      .catch((err) => res.status(400).send(
        messageFormat.error(err, 400)
      ));
  }
}
