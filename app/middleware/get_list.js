module.exports = function transform(body, req, res) {
  let responseBody = JSON.stringify(body);

  if (req.method === 'GET' && responseBody === '[]'){
    res.status(404).send({
      status: '404',
      message: 'Resource not found'
    });
  }
  return body;
}
