var path = require('path');
var globSync = require('glob').sync;
var express = require('express');
var app = express();

const PATH_STYLES = path.resolve(__dirname, '../app/styles');

app.use('/styles', express.static(PATH_STYLES));

app.use('/', express.static(path.join(__dirname, '..', 'build')));

var mocks = globSync('./mocks/**/*.js', {cwd: __dirname}).map(require);

var nedb = require('nedb');

app.itemsDB = new nedb({filename: 'db-content/items', autoload: true});
app.eventsDB = new nedb({filename: 'db-content/events', autoload: true});

mocks.forEach(function (route) {
  route(app);
});

var server = app.listen(process.env.PORT || 3000, () => {
  var port = server.address().port;

  console.log('Server is listening at %s', port);
});
