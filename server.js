const morgan = require('morgan');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes');
const fs = require('fs')
const path = require('path')
const rfs = require('rotating-file-stream')

const port = process.env.PORT || 8081;

let logDirectory = path.join(__dirname, 'log')

fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)

let accessLogStream = rfs('access.log', {
  interval: '1d',
  path: logDirectory
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('combined', {stream: accessLogStream}))

app.use('/api', routes);

app.listen(port, () => {
  console.log(`Listening to port: ${port}`);
});
