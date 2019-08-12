const app = module.exports = require('express')();

app.use('/analytics', require('./analyticsRoute'));

app.use('/user', require('./userRoute'));








