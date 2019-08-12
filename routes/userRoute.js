const app = module.exports = require('express')();

const userServices = require('../services/userServices');


app.post('/register', (req, res) => {
    (async () => {
        try {
            user = await userServices.getUser({ appName: req.body.appName })

            if (user[0]) {
                console.log(user)
                res.json({
                    success: false,
                    message: "App already Exists"
                })
            }
            else {
                us = req.body
                us.appID = us.appName + Date.now()
                console.log(us)
                user = await userServices.saveUser(us)
                res.json({
                    success: true,
                    user: user
                })
            }
        }
        catch (e) {
            console.log(e)
            res.json({
                success: false
            })
        }
    })();
})