var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.use(express.static('client'))



// app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// app.use(function(req, res) {
//     res.setHeader('Content-Type', 'text/plain')
//     res.write('you posted', req.body)
//     res.end(JSON.stringify(req.body, null, 2));
// })
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
