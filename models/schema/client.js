const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')
const passportLocalMongoose = require('passport-local-mongoose');

const clientSchema = new mongoose.Schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId,
        auto: true
    },
    fullNames:{
        firstname: {
            type: String,
            required: true,
        },
        lastname:  {
            type: String,
            required: true,
        },
    },
    username: {
        type: String,
        unique: true
    },
    phone: String,
    deleted:{
        status:{
            type: Boolean,
            default:false
        },
        deletedAt:{
            type: Date,
            default: null
        }
    },
    organization :{
        name: {
            type: String,
            required: true
        },
        website:{
            type: String,
            required: true
        }
    },
    isActive:{
        type: Boolean,
        default: true
    },
},{timestamps: true});

clientSchema.plugin(uniqueValidator);
clientSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('Client', clientSchema);