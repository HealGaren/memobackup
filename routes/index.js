const router = require('express').Router();
const mongo = require('../mongo');

router.post('/createToken', (_, res) => {
    mongo.User.create({}).then(user => {
        res.json({token: user._id});
    });
});

router.get('/checkToken', (req, res) => {
    const token = req.query.token;
    mongo.User.findById(token).exec().then(user => {
        if (!user) res.json({valid: false, message: '존재하지 않는 토큰입니다.'})
        else res.json({valid: true, message: '존재하는 토큰입니다.'});
    })
});

router.post('/backup', (req, res) => {
    const memos = req.body.memos;
    const token = req.body.token;
    if (!Array.isArray(memos)) {
        res.status(400).json({ message: '요청의 memos 필드가 잘못되었습니다.'});
    }
    else mongo.User
        .findByIdAndUpdate(token, {$set: {data: JSON.stringify(memos)}})
        .exec()
        .then(() => res.json({ message: '성공적으로 저장되었습니다.'}))
        .catch(err => res.status(400).json({ message: '존재하지 않는 토큰입니다.' }));
});

router.get('/backup', (req, res) => {
    const token = req.query.token;

    mongo.User
        .findById(token)
        .then(user => {
            if (!user) res.status(400).json({ message: '존재하지 않는 토큰입니다.'});
            else res.json({ memos: JSON.parse(user.data)})
        })
        .catch(err => res.status(500).json({ message: err.message }));
});

module.exports = router;