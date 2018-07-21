const router = require('express').Router();

let token = 0;
const dataMap = {};

router.post('/createToken', (req, res) => {
    token++;
    res.json({ token: "token-" + token });
});

router.post('/backup', (req, res) => {
    const memos = req.body.memos;
    const token = req.body.token;
    dataMap[token] = memos;
    res.json({ message: JSON.stringify(req.body) });
});

router.get('/restore', (req, res) => {
    const token = req.query.token;
    const memos = dataMap[token];
    try {
        res.json({ memos: JSON.parse(memos) });
    }
    catch (e) { res.json(e, dataMap);}
});

module.exports = router;