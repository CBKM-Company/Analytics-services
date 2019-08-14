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

app.use('/cbkm', express.static('public'))


mongoose.connect('mongodb+srv://cbkm:cbkm@cbkm-zokml.mongodb.net/analytics?retryWrites=true&w=majority', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
	console.log("connected to mongo")
});

app.get('/get', (req, res) => {
    res.json({ get: true })
})

const server = app.listen(process.env.PORT || 3000, () => {
});
var io = require('socket.io')(server);
io.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
      console.log(data);
    });
  });


// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBOYW1lIjoiR3JhYklUIiwiaWF0IjoxNTY1NTk0NzYxfQ.LyLk-jYRNxZj80xvFY53YoBLImPUtlnUW8s4KCcYaxM
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBOYW1lIjoiR3JhYklUIiwiaWF0IjoxNTY1NTk0ODA1fQ.i9ZpSP83TAuk4VkHs7HbcplGRd91jybyNbX2gYSmnfc