const _             = require('lodash'),
      Combo         = require('../models/combo'),
      messageFormat = require('../rules/message_format'),
      byId          = require('../rules/methods_by_id');

module.exports = {
  get: (req, res) => {
    Combo.findById(req.params.combo_id)
      .then((combo) => res.status(200).send(
        messageFormat.success(combo, 200)
      ))
      .catch((err) => {
        res.status(400).send(messageFormat.error(err, 400));
        byId.castHandler(res, err);
      });
  },

  put: (req, res) => {
    let keys,
        message = 'Current combo updated with success!';

    Combo.findById(req.params.combo_id)
      .populate({
        path: 'foods',
        model: 'food'
      })
      .then((combo) => {
        combo.name = req.body.name;
        combo.save()
          .then((combo) => res.status(201).send(
            messageFormat.success(message, 200)
          ))
          .catch((err) => res.status(439).send(
            messageFormat.error(err, 439)
          ));
      })
      .catch((err) => res.status(404).send(
        messageFormat.error(err, 404)
      ));
  },

  patch: (req, res) => {
    let message = 'Current combo updated with success!',
        keys;
    Combo.findById(req.params.combo_id)
      .then((combo) => {
        keys = _.keys(req.body);
        keys.map((e) => combo[e] = req.body[e]);
        combo.save()
          .then((combo) => res.status(200).send(
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
    let message = 'Current Combo deleted with success!'
    Combo.findByIdAndRemove(req.params.combo_id)
      .then((combo) => res.status(200).send(
        messageFormat.success(message, 200)
      ))
      .catch((err) => res.status(400).send(
        messageFormat.delete(err, 400)
      ));
  }
}
