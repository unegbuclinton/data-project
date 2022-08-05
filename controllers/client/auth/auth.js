const createErrorNotification = require("../../../middlewares/toast/error")
const { signInClient } = require("../../../services/client/auth")
const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const exec = require('exec-then')
// display client login
exports.display_client_login = async (req, res)=>{
    try{
        res.render('clients/login')
    } catch(err){
        console.log(err)
    }
}



exports.sigin_client = async (req, res) =>{
    try{
       const data = req.body
       const {result, error} = await signInClient(data)
       if(error){
            console.log(error)
            createErrorNotification(req, res, error.message)
       }else{
        const user = new User({
            username: req.body.username.toLowerCase(),
            password: req.body.password
        });
        passport.authenticate('local', function(err, user) {
            if (err) {
                console.log(err)
                createErrorNotification(req, res, err)
            } else {
                if (user) {
                    //login user
                    console.log(req.isAuthenticated())
                    req.login(user, function(err) {
                        if(err){
                            console.log(err)
                        }
                        res.redirect('/home');
                    })
                } else {
                    createErrorNotification(req, res, 'Incorrect login details' )
                }
            }
        })(req, res);
       }
    }catch(error){
        console.log(error)
        createErrorNotification(req, res, error )
    }
}


exports.client_logout = function(req, res) {
    exec(req.logout()).then(res.redirect('/login'))  
}
