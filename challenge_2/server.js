var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('client'));
app.use(bodyParser.json());

app.post('/', function(req, res) {
    var csv = jsonToCSV(req.body);
    res.send(csv);
});

app.listen(3000, () => console.log('Listening on port 3000...'));

var jsonToCSV = function(obj) {
    var finalString = '';
    for (var key in obj) {
        if (!Array.isArray(key[obj]) && key !== 'children') {
            finalString += key + ',';
        }
    }
    finalString = finalString.slice(0, finalString.length - 1) + '<br>';
    var getRow = function(obj) {
        for (var key in obj) {
            if (Array.isArray(obj[key])) {
                finalString = finalString.slice(0, finalString.length - 1);
                finalString += '<br>';
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
    finalString = '<h2>Your CSV is below!</h2>' + finalString;
    return finalString;
}