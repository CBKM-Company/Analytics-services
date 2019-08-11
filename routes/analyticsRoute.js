const app = module.exports = require('express')();

const analyticsServices = require('../services/analyticsServices');

app.get("/alive", (req, res) => {
    res.json({ alive: true })
})

app.post("/", (req, res) => {
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
app.get('/', (req, res) => {
    (async () => {
        try {
            pro = await analyticsServices.getAnalytics()
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
app.get('/action/:id', (req, res) => {
    (async () => {
        try {
            pro = await analyticsServices.getAnalytics({
                "action": req.params.id
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

app.get('/name/:id', (req, res) => {
    (async () => {
        try {
            pro = await analyticsServices.getAnalytics({
                "name": req.params.id
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

app.post('/specific', (req, res) => {
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

app.get('/actioncount/:id', (req, res) => {
    (async () => {
        try {
            pro = await analyticsServices.getAnalyticsCount({
                "action": req.params.id
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


app.get('/namecount/:id', (req, res) => {
    (async () => {
        try {
            pro = await analyticsServices.getAnalyticsCount({
                "name": req.params.id
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




app.post('/specificcount', (req, res) => {
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
                "action": req.params.id
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

app.get('/namedelete/:id', (req, res) => {
    (async () => {
        try {
            pro = await analyticsServices.deleteAnalytics({
                name: req.params.id
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

app.post('/specificdelete', (req, res) => {
    (async () => {
        try {
            pro = await analyticsServices.deleteAnalytics(req.body)
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


app.post('/distinct', (req, res) => {
    (async () => {
        try {
            what = req.body.what;
            how = req.body.how
            pro = await analyticsServices.getDistinctAnalytics(what, how)
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
