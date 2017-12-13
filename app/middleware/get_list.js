const messageFormat = require('../rules/message_format');

module.exports = function transform(body, req, res) {
  let responseBody = JSON.stringify(body),
      emptyBody    = JSON.stringify(messageFormat.empty()),
      message      = 'Resource not found';

  if (req.method === 'GET' &&
     (responseBody === '[]' ||
     responseBody === emptyBody))
    return res.status(404).send(messageFormat.error(message, 404));
  return body;
}
