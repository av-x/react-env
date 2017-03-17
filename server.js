var express = require('express');
var app = express();
var port = 8800;

app.use(express.static(`${__dirname}/dist`));

app.get('*', function(req, res) {
  res.on('error', console.error);
  res.sendFile(`${__dirname}/dist/index.html`);
});

app.listen(port);
console.log(`Listening to port ${port}...`);
