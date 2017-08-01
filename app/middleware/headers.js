const messageFormat = require('../rules/message_format');

module.exports = (req, res, next) => {
  let contentType = req.headers['content-type'];
  let message = "The content-type header must be sent as 'application/json'";
  let { method } = req;
  if (contentType !== 'application/json' &&
     (method === 'POST' ||
     (method === 'PUT' ||
      method === 'PATCH')))
    res.status(400).send(
      messageFormat.error(message, 400)
    );
  next();
}
