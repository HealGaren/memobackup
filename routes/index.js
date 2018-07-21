const router = require('express').Router();

let token = 0;
const dataMap = {};

router.post('/createToken', (req, res) => {
    token++;
    res.json({ token: "token-" + token });
});

router.post('backup', (req, res) => {
    const memos = req.body.memos;
    const token = req.body.token;
    dataMap[token] = memos;
    res.json({ message: "저장 성공" });
});

router.get('restore', (req, res) => {
    const token = req.body.token;
    const memos = dataMap[token];
    res.json({ memos });
});

module.exports = router;