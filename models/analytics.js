const mongoose = require('mongoose');


const analyticsSchema = mongoose.Schema({
    action: {
        required: true,
        type: String,
    },
    name: {
        type: String,
    },
    stamp: {
        required: true,
        type: Date,
    }

}, { timestamps: true })

module.exports = mongoose.model('analytics', analyticsSchema);