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
            secret: settings.sessionSecret, // fix secret asap
            resave: false,
            saveUninitialized: false,
            cookie: { secure: true }
        }));
          
       
        app.use(passport.initialize()); 
        app.use(passport.session());

        app.use(function(req, res, next){
            res.locals.messages =  req.flash();
            next();
        })
        
        app.use(function(req, res, next){
            res.locals.user = req.user || null
            next();
        });
          
        // Pass app to routes
        routes(app);

        app.use(function (req, res) {
            res.status(404).render('404');
        }); 

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