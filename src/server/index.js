var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/data', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Content-Type', 'application/json');
    request.post(
        'http://dev.videotherapy.co/vt/api/dispatcher.php',
        { json: req.body },
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                res.send(body)
            }
        }
    );
});

const server = app.listen(8080, () => {
    console.log('runing server port 8080');
});
