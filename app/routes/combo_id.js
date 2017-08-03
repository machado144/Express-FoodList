const _ = require('lodash');
const Combo = require('../models/combo');
const messageFormat = require('../rules/message_format');
const byId = require('../rules/methods_by_id');

module.exports = {

  get: (req, res) => {
    debugger;
    Combo.findById(req.params.combo_id)
      .then((combo) => res.status(200).send(
        messageFormat.success(combo, 200)
      ))
      .catch((err) => {
        debugger;
        res.status(400).send(messageFormat.error(err, 400));
        byId.castHandler(res, err);
      });
  },

  put: (req, res) => {
    let keys;
    let message = 'Current combo updated with success!';
    Combo.findById(req.params.combo_id)
      .then((combo) => {
        keys = Object.keys(req.body);
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

  patch: (req, res) => {
    let message = 'Current combo updated with success!';
    let keys;
    Combo.findById(req.params.combo_id)
      .then((combo) => {
        keys = Object.keys(req.body);
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
      .catch((err) => res.status(res.statusCode).send(
        messageFormat.error(err, res.statusCode)
      ));
  }
}
