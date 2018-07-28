/**
 * Created by 최예찬 on 2016-08-20.
 */
const mongoose = require('mongoose');
const crypto = require('crypto');

const schema = new mongoose.Schema({
    data: {
        type: String,
        require: true,
        default: '[]'
    }
});

const model = mongoose.model('backups', schema);


module.exports = model;