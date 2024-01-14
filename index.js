var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "haloo sang!" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Welcome" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " Mantappppp!" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
