const userServices = require('../services/userServices');


let userAuth = (req, res, next) => {
    (async () => {
        console.log(req.headers.appid)
        user = await userServices.getUser({ appID: req.headers.appid })
        console.log(user[0])
        if (!user[0]) {
            res.json({
                auth: false,
                message: "You are not a registered app"
            })
        }
        next()
    })()


}

module.exports = {
    userAuth
}