// send success notification or flash

function createSuccessNotification(req, res, message){
    req.flash('success', message)
    res.redirect('back')
}


module.exports = createSuccessNotification