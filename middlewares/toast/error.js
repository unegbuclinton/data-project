// send error notification or flash

function createErrorNotification(req, res, message){
    req.flash('error', message)
    res.redirect('back')
}


module.exports = createErrorNotification