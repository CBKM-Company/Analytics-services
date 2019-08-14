var express = require('express');
var cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var routes = require('./routes')


var app = express();


const userServices = require('./services/userServices');

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

analytics = io
    .of('/analytics')
    .on('connection', function (socket) {
        socket.on('save', function (data) {
            (async () => {
                console.log(data)
                user = await userServices.getUser({ appID: data.appID })
                console.log(user)
                if(user){
                    pro = await analyticsServices.saveAnalytics(data)
                }
            })();
        });
    });

