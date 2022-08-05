const { getSingleClient } = require("../../../services/client")

exports.display_user_dashboard = async (req, res) => {
    try{
       const {result, error} = await getSingleClient(req.user.id)
       if(error){
            createErrorNotification(req, res, error.message)
       }else{
            res.render('clients/databoxpreview',{
                data: result?.dataBox
            })
       }
    } catch(err){
        console.log(err)
        createErrorNotification(req, res, err.message)
    }
}

