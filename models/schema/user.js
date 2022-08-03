const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId,
        auto: true
    },
    fullNames:{
        firstname: String,
        lastname: String,
    },
    username: {
        type: String,
        unique: true
    },
    role: {
        type: String,
        default: null
    },
    phone: String,
    organization :{
        name: {
            type: String,
        },
        website:{
            type: String,
        }
    },
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
    isAdmin: {
        type: Boolean,
        default: false
    },
    isActive:{
        type: Boolean,
        default: true
    },
},{timestamps: true});

userSchema.plugin(uniqueValidator);
userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', userSchema);