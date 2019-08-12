const userSchema = require('../models/user');

const getUser = function (params) {
    return userSchema.find(params).exec();
}



const saveUser = function (productObj) {
    let prod = new userSchema(productObj);
    return prod.save();
}

module.exports = {
    getUser,
    saveUser
}