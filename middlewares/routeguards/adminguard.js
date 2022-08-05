// send error notification or flash

function isAuthenticatedAdmin(req, res, next){
    if(req.isAuthenticated() && req.user.isAdmin === true){
        next()
    }else{
        req.flash("error", "You dont have sufficient permissions");
        res.redirect('/auth-login')
    }
}


module.exports = isAuthenticatedAdmin