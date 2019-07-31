const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
})

app.get('/show', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/summary', (req, res) => {
    res.send(`<script>console.log('${req.body}');</script>`);
});

app.listen(3000);