const morgan          = require('morgan'),
      express         = require('express'),
      app             = express(),
      bodyParser      = require('body-parser'),
      routes          = require('./routes'),
      fs              = require('fs'),
      path            = require('path'),
      rfs             = require('rotating-file-stream'),
      swaggerUi       = require('swagger-ui-express'),
      YAML            = require('yamljs')
      swaggerDocument = YAML.load('./swagger.yaml');

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

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api', routes);

app.listen(port, () => console.log(`Listening to port: ${port}`));
