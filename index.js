const express = require('express');
const path = require('path');
const app = express();

app.set('views', path.join(__dirname, 'views'))
app.use('/static', express.static(path.join(__dirname, "static")));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
});

const server = app.listen('3000', () => {
    console.log('Server up and listening at >> http://192.168.0.18:' + server.address().port);
})