var express = require('express');
var app = express();

app.use(function(req, res, next) {
    console.log(req.headers);
    res.json({
        ipaddress: req.headers['x-forwarded-for'],
        language: req.headers['accept-language'].split(',')[0],
        software: req.headers['user-agent']
    });
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
