/**
 * Created by 최예찬 on 2016-08-20.
 */
const mongoose = require('mongoose');
mongoose.Promise = Promise;

mongoose.connect('mongodb://admin:healgaren123@ds257851.mlab.com:57851/memobackup').then(() => {
    console.log('mongoose connect done');
});


module.exports = {
    User: require('./user'),
};