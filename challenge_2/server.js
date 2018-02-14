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
    var csv = jsonToCSV(req.body);
    console.log('csv', csv);
    // console.log('body: ' + JSON.stringify(req.body.input));

    res.send(csv);
})


app.listen(3000, () => console.log('Listening on port 3000...'));





var jsonToCSV = function(obj) {
    // set up inner recursion
    var finalString = '';
    for (var key in obj) {
        if (!Array.isArray(key[obj]) && key !== 'children') {
            finalString += key + ',';
        }
    }
    finalString = finalString.slice(0, finalString.length - 1) + '\n';
    // set up inner recursion for children
    var getRow = function(obj) {
        for (var key in obj) {
            if (Array.isArray(obj[key])) {
                finalString = finalString.slice(0, finalString.length - 1);
                finalString += '\n';
                var children = obj[key];
                for (var i = 0; i < children.length; i++) {
                  getRow(children[i]);    
                }
                
            } else {
                finalString += obj[key] + ',';
            }
        }
    }
    getRow(obj);
    return finalString;
}