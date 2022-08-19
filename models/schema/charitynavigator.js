const mongoose = require('mongoose');

const charityNavigatorSchema = new mongoose.Schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId,
        auto: true
    },
    charityName:{
        type: String,
        required: true,
    },
    url: String,
    category:String,
    state: String,
    zip:String, 
    fundraisingExpenses: String,
    administrativeExpenses: String,
    programExpenses: String,
    totalRevenue: String,
    totalExpenses: String,
    fundraisingEffieciency: String,
    primaryRevenueGrowth: String,
    score: String,
    organization: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
},{timestamps: true});

module.exports = mongoose.model('CharityNavigator', charityNavigatorSchema);