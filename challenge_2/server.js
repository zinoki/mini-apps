var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.use(express.static('client'))
app.use(bodyParser.json());
app.use((req, res, next) => {
    console.log(`Received ${req.method} request to ${req.url}`);
    next();
})

app.post('/', function(req, res) {
    var obj = {};
    console.log('body: ' + JSON.stringify(req.body));
    res.send(req.body);
})


app.listen(3000, () => console.log('Listening on port 3000...'));
