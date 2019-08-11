var express = require('express');
var cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var routes = require('./routes')


var app = express();


app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.use('/', routes);



mongoose.connect('mongodb+srv://cbkm:cbkm@cbkm-zokml.mongodb.net/analytics?retryWrites=true&w=majority', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
	console.log("connected to mongo")
});

app.get('/get', (req, res) => {
    res.json({ get: true })
})

const server = app.listen(process.env.PORT || 8080, () => {
});