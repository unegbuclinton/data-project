// send error notification or flash

function isAuthenticatedClient(req, res, next){
    if(req.isAuthenticated() && req.user.isAdmin !== true){
        next()
    }else{
        req.flash("error", "You dont have sufficient permissions");
        res.redirect('/login')
    }
}


module.exports = isAuthenticatedClient