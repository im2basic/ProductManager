const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    path = require('path'),
    port = 8000

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/dist/public'));

require('./server/config/database');
require('./server/config/routes')(app);

app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})