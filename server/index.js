var path = require('path');
var globSync = require('glob').sync;
var express = require('express');
var app = express();

const PATH_DIST = path.resolve(__dirname, '../build');

app.use(express.static(PATH_DIST));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

var mocks = globSync('./mocks/**/*.js', {cwd: __dirname}).map(require);

var nedb = require('nedb');

app.itemsDB = new nedb({filename: 'db-content/items', autoload: true});
app.eventsDB = new nedb({filename: 'db-content/events', autoload: true});

mocks.forEach(function (route) {
  route(app);
});

var server = app.listen(process.env.PORT || 8080, () => {
  var port = server.address().port;

  console.log('Server is listening at %s', port);
});
