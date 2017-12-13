const messageFormat = require('../rules/message_format');

module.exports = {
  castHandler: (res, err) => {
    let responseBody = JSON.stringify(err),
        message      = 'Resource not found';

    if (responseBody.includes('CastError'))
      return res.status(404).send(messageFormat.error(message, 404));
  }
}
