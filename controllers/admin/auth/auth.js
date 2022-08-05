const passport = require('passport');
const mongoose = require('mongoose');
const { signInAdmin } = require('../../../services/auth');
const createErrorNotification = require('../../../middlewares/toast/error');
const createSuccessNotification = require('../../../middlewares/toast/success');
const User = mongoose.model('User');

// Display Admin Login Page

exports.display_admin_login = async (req, res)=>{
    try{
        res.render('admin/signin')
    } catch(err){
        console.log(err)
    }
}

exports.sigin_admin = async (req, res) =>{
    try{
       const data = req.body
       const {result, error} = await signInAdmin(data)
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
                        res.redirect('/create-admin');
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




