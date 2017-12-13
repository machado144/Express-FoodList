const messageFormat = require('../rules/message_format');

module.exports = (req, res, next) => {
  let stringBody = JSON.stringify(req.body),
      { method, body } = req;
      message = 'The PATCH method only accepts one item';
  if (method == 'PATCH' && Object.keys(body).length !== 1)
    res.status(400).send(
      messageFormat.error(message, 400)
    );
  next();
}
