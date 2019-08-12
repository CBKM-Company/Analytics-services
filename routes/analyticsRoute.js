const app = module.exports = require('express')();

const analyticsServices = require('../services/analyticsServices');

const { userAuth } = require('../middleware/auth')

app.get("/alive", userAuth, (req, res) => {
    res.json({ alive: true })
})

app.post("/", userAuth, (req, res) => {
    (async () => {
        try {
            data = req.body

            data.stamp = (new Date(Date.now() - (-330) * 60000)).toISOString()
            console.log(data)
            pro = await analyticsServices.saveAnalytics(data)

            res.json({
                success: true
            })
        }
        catch (e) {
            console.log(e);
            res.json({
                success: false
            })
        }
    })();
})
app.get('/', userAuth, (req, res) => {
    (async () => {
        try {
            pro = await analyticsServices.getAnalytics({ appID: req.body.appID })
            res.json({ success: true, data: pro })
        }
        catch (e) {
            console.log(e);
            res.json({
                success: false
            })
        }
    })();
})
app.get('/action/:id', userAuth, (req, res) => {
    (async () => {
        try {
            pro = await analyticsServices.getAnalytics({
                "action": req.params.id,
                appID: req.body.appID
            })
            res.json({ success: true, data: pro })
        }
        catch (e) {
            console.log(e);
            res.json({
                success: false
            })
        }
    })();
});
app.get('/name/:id', userAuth, (req, res) => {
    (async () => {
        try {
            pro = await analyticsServices.getAnalytics({
                "name": req.params.id,
                appID: req.body.appID
            })
            res.json({ success: true, data: pro })
        }
        catch (e) {
            console.log(e);
            res.json({
                success: false
            })
        }
    })();
});

app.post('/specific', userAuth, (req, res) => {
    (async () => {
        try {
            pro = await analyticsServices.getAnalytics(req.body)
            res.json({ success: true, data: pro })
        }
        catch (e) {
            console.log(e);
            res.json({
                success: false
            })
        }
    })();
});

app.get('/actioncount/:id', userAuth, (req, res) => {
    (async () => {
        try {
            pro = await analyticsServices.getAnalyticsCount({
                "action": req.params.id,
                appID: req.body.appID
            })
            res.json({ success: true, data: pro })
        }
        catch (e) {
            console.log(e);
            res.json({
                success: false
            })
        }
    })();
});


app.get('/namecount/:id', userAuth, (req, res) => {
    (async () => {
        try {
            pro = await analyticsServices.getAnalyticsCount({
                "name": req.params.id,
                appID: req.body.appID
            })
            res.json({ success: true, data: pro })
        }
        catch (e) {
            console.log(e);
            res.json({
                success: false
            })
        }
    })();
});




app.post('/specificcount', userAuth, (req, res) => {
    (async () => {
        try {
            pro = await analyticsServices.getAnalyticsCount(req.body)
            res.json({ success: true, data: pro })
        }
        catch (e) {
            console.log(e);
            res.json({
                success: false
            })
        }
    })();
});

app.get('/actiondelete/:id', (req, res) => {
    (async () => {
        try {
            pro = await analyticsServices.deleteAnalytics({
                "action": req.params.id,
                appID: req.body.appID
            })
            res.json({ success: true, data: pro })
        }
        catch (e) {
            console.log(e);
            res.json({
                success: false
            })
        }
    })();
});

app.get('/namedelete/:id', userAuth, (req, res) => {
    (async () => {
        try {
            pro = await analyticsServices.deleteAnalytics({
                name: req.params.id,
                appID: req.body.appID
            })
            res.json({ success: true, data: pro })
        }
        catch (e) {
            console.log(e);
            res.json({
                success: false
            })
        }
    })();
});

app.post('/specificdelete', userAuth, (req, res) => {
    (async () => {
        try {
            pro = await analyticsServices.deleteAnalytics(req.body, req.body.appID)
            res.json({ success: true, data: pro })
        }
        catch (e) {
            console.log(e);
            res.json({
                success: false
            })
        }
    })();
});

app.post('/distinct', userAuth, (req, res) => {
    (async () => {
        try {
            what = req.body.what;
            how = req.body.how
            appID = req.body.appID
            pro = await analyticsServices.getDistinctAnalytics(what, how, req.body.appID)
            res.json({ success: true, data: pro })
        }
        catch (e) {
            console.log(e);
            res.json({
                success: false
            })
        }
    })();
});
