var express = require('express');
var app = express();
var port = 3000;

app.use(express.static('../client/dist'));

app.listen(port, () => {
  console.log('listening on the port man!');
});
