const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes');

const port = process.env.PORT || 8081;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', routes);

app.listen(port, () => {
  console.log(`Listening to port: ${port}`);
});
