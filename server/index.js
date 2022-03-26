var path = require('path');
var express = require('express');
var app = express();

const PATH_STYLES = path.resolve(__dirname, '../app/styles');

app.use('/styles', express.static(PATH_STYLES));

app.use('/', express.static(path.join(__dirname, '..', 'build')));

var server = app.listen(process.env.PORT || 3000, () => {
    var port = server.address().port;

    console.log('Server is listening at %s', port);
});
