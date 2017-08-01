const messageFormat = require('../rules/message_format');

module.exports = function validationErrors(body, req, res) {
  let responseBody = JSON.stringify(body);

  if (responseBody.includes('ValidationError')){
    res.status(400).send(
    messageFormat.error(res, 400)
  );
  }
  return body;
}
