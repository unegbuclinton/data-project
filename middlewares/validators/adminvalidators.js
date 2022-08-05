
const Joi = require('joi')
const createErrorNotification = require('../toast/error')

exports.validateCreateClient = async (req, res, next)=>{
    try {
        const schema = Joi.object().keys({
            firstname : Joi.string().min(1).max(30).regex(/[A-Za-z]/).required(),
            lastname: Joi.string().min(1).max(30).regex(/[A-Za-z]/).required(),
            username: Joi.string().email().required(),
            password: Joi.string().min(8).required(),
            phone: Joi.string().required(),
            organizationName:  Joi.string().required(),
            organizationWebsite: Joi.string().required()
        })
        const data = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            username: req.body.username.toLowerCase(),
            password: req.body.password,
            phone: req.body.phone,
            organizationName: req.body.organizationName,
            organizationWebsite: req.body.organizationWebsite
        }

        const { error, value } = schema.validate(data)

        if(error) {
            //LOG TO WINSTON Later
            console.log(error)
            createErrorNotification(req, res, 'Validation Error, bad data provided')
        }else{
            req.body = value
            next()
        }

    } catch (error) {
        //LOG TO WINSTON Later
        console.log(error)
        createErrorNotification(req, res, 'An Unknown Error Occured')
    }
}


exports.validateCreateAdmin = async (req, res, next)=>{
    try {
        const schema = Joi.object().keys({
            firstname : Joi.string().min(1).max(30).regex(/[A-Za-z]/).required(),
            lastname: Joi.string().min(1).max(30).regex(/[A-Za-z]/).required(),
            username: Joi.string().email().required(),
            password: Joi.string().min(8).required(),
            phone: Joi.string().required(),
            permissions: Joi.string().required(),
        })
        const data = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            username: req.body.username.toLowerCase(),
            password: req.body.password,
            phone: req.body.phone,
            permissions: req.body.permissions
        }

        const { error, value } = schema.validate(data)

        if(error) {
            //LOG TO WINSTON Later
            console.log(error)
            createErrorNotification(req, res, 'Validation Error, bad data provided')
        }else{
            req.body = value
            next()
        }

    } catch (error) {
        //LOG TO WINSTON Later
        console.log(error)
        createErrorNotification(req, res, 'An Unknown Error Occured')
    }
}


exports.validateAdminSignin = async (req, res, next)=>{
    try {
        const schema = Joi.object().keys({
            username: Joi.string().email().required(),
            password: Joi.string().min(8).required(),
        })
        const data = {
            username: req.body.username.toLowerCase(),
            password: req.body.password,
        }

        const { error, value } = schema.validate(data)

        if(error) {
            //LOG TO WINSTON Later
            console.log(error)
            createErrorNotification(req, res, 'Validation Error, bad data provided')
        }else{
            req.body = value
            next()
        }

    } catch (error) {
        //LOG TO WINSTON Later
        console.log(error)
        createErrorNotification(req, res, 'An Unknown Error Occured')
    }
}

