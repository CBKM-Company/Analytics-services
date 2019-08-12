const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    appName: {
        required: true,
        type: String,
    },
    appID: {
        type: String,
        required: true,
    },

}, { timestamps: true })

module.exports = mongoose.model('user', userSchema);