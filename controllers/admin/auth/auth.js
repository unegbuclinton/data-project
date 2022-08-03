// Display Admin Login Page

exports.display_admin_login = async (req, res)=>{
    try{
        res.render('admin/signin')
    } catch(err){
        console.log(err)
    }
}





