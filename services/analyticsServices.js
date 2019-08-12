const analyticsSchema = require('../models/analytics');

const getAnalytics = function (params,id) {
    return analyticsSchema.find(params).exec();
}
const saveAnalytics = function (productObj,id) {
    let prod = new analyticsSchema(productObj);
    return prod.save();
}

const getAnalyticsCount = function (params,id) {
    return analyticsSchema.count(params).exec();
}


const deleteAnalytics = function (params,id) {
    return analyticsSchema.deleteMany(params).exec();
}

const getDistinctAnalytics = function (what,how,id) {
    return analyticsSchema.find({appID:id}).distinct(what,how).exec();

}
module.exports = {
    saveAnalytics,
    getAnalytics,
    getAnalyticsCount,
    deleteAnalytics,
    getDistinctAnalytics
}