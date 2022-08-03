const mongoose = require('mongoose');

const dataBoxSchema = new mongoose.Schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId,
        auto: true
    },
    url: String,
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client'
    },
},{timestamps: true});

module.exports = mongoose.model('DataBox', dataBoxSchema);