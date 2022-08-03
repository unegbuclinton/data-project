// require dependencies
const flash = require('connect-flash');
const mongoose = require("mongoose")
const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy; 
const settings = require('../config/index')
const useModels = require('./modelsloader')
const session = require('cookie-session');
const User = mongoose.model('User')
const express = require('express')
const routes = require('../routes/routes')


class ExpressLoader{
    static async startExpress(){

        const app = express();

        app.use(express.static("public"));
        app.use('/uploads', express.static(__dirname + '/uploads'))
        app.use(flash());
        app.set('view engine', 'ejs');

        app.use(express.urlencoded({extended:true}))
        app.use(express.json());

        app.use(session({
            secret: 'Our jujunbdg heueuvev dgdg', // fix secret asap
            resave: false,
            saveUninitialized: false,
        }));
          
       
        app.use(function(req, res, next){
            res.locals.messages =  req.flash();
            next();
        })
          
        // Pass app to routes
        routes(app);

        passport.use('local', new LocalStrategy(User.authenticate())); 
        passport.serializeUser(User.serializeUser()); 
        passport.deserializeUser(User.deserializeUser());

        let server =  app.listen(settings.port, ()=>{
            console.log('server running on ' + settings.port)
        })

        return server

    }
}

module.exports = ExpressLoader