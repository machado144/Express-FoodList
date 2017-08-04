const Food = require('../models/food');
const messageFormat = require('../rules/message_format');
const byId = require('../rules/methods_by_id');

module.exports = {

  get: (req, res) => {
    Food.findById(req.params.foods_id)
      .then((food) => res.status(200).send(
        messageFormat.success(food, 200)
      ))
      .catch((err) => {
        byId.castHandler(res, err);
        res.status(400).send(messageFormat.error(err, 400));
      });
  },

  put: (req, res) => {
    let keys;
    let message = 'Current food updated with success!';
    Food.findById(req.params.foods_id)
      .then((food) => {
        keys = Object.keys(req.body);
        keys.map((e) => food[e] = req.body[e]);
        food.save()
          .then((food) => res.status(200).send(
            messageFormat.success(message, 200)
          ))
          .catch((err) => res.status(res.statusCode).send(
            messageFormat.error(err, res.statusCode)
          ));
      })
      .catch((err) => res.status(res.statusCode).send(
        messageFormat.error(err, res.statusCode)
      ));
  },

  patch: (req, res) => {
    let message = 'Current food updated with success!';
    let keys;
    Food.findById(req.params.foods_id)
      .then((food) => {
        keys = Object.keys(req.body);
        keys.map((e) => food[e] = req.body[e]);
        food.save()
          .then((food) => res.status(200).send(
            messageFormat.success(message, 200)
          ))
          .catch((err) => res.status(res.statusCode).send(
            messageFormat.error(err, res.statusCode)
          ));
      })
      .catch((err) => res.status(res.statusCode).send(
        messageFormat.error(err, res.statusCode)
      ));
  },

  delete: (req, res) => {
    let message = 'Current food deleted with success!'
    Food.findByIdAndRemove(req.params.foods_id)
      .then((food) => res.status(200).send(
        messageFormat.success(message, 200)
      ))
      .catch((err) => res.status(400).send(
        messageFormat.delete(err, 400)
      ));
  }

}
