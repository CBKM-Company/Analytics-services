const analyticsSchema = require('../models/analytics');

const getAnalytics = function (params) {
    return analyticsSchema.find(params).exec();
}
const saveAnalytics = function (productObj) {
    let prod = new analyticsSchema(productObj);
    return prod.save();
}

const getAnalyticsCount = function (params) {
    return analyticsSchema.count(params).exec();
}


const deleteAnalytics = function (params) {
    return analyticsSchema.deleteMany(params).exec();
}

const getDistinctAnalytics = function (what,how) {
    return analyticsSchema.distinct(what,how).exec();

}
module.exports = {
    saveAnalytics,
    getAnalytics,
    getAnalyticsCount,
    deleteAnalytics,
    getDistinctAnalytics
}