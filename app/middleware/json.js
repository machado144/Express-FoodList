const messageFormat = require('../rules/message_format');

module.exports = (req, res, next) => {
  let { body, method } = req,
      message          = `The ${method} must be sent as 'raw' data format, and cannnot be empty`;
      body             = JSON.stringify(body);
  if ((method === 'POST' ||
     method === 'PUT') &&
     (body === '{}' ||
     body === '[]' ||
     body === ''))
   res.status(400).send(
     messageFormat.error(message, 400)
   );
  next();
}
