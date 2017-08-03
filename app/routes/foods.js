const Food = require('../models/food');
const messageFormat = require('../rules/message_format');

module.exports = {

  post: (req, res) => {

    let food = new Food();
    let message = `Food ${req.body.name} created with success!`;

    food.name = req.body.name;
    food.price = req.body.price;
    food.size = req.body.size;
    food.spicy = req.body.spicy;
    food.refillable = req.body.refillable;
    food.drinkable = req.body.drinkable;

    food.save()
      .then((response) => res.status(201).send(
        messageFormat.success(message, 201)
      ))
      .catch((err) => res.status(400).send(
        messageFormat.error(err, 400)
      ));
  },

  get: (req, res) => {
    Food.find()
      .then((food) => res.json(food))
      .catch((err) => res.status(res.statusCode).send(
        messageFormat.error(err, res.statusCode)
      ));
  }
}
