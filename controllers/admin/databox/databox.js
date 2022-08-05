// Display Databox Settings

const { getSingleDatabox, updateDatabox } = require("../../../services/databox")

exports.display_databox_settings = async (req, res) =>{
    try{
        const {result, error} = await getSingleDatabox(req.params.clientId)
        if(error){
             createErrorNotification(req, res, error.message)
        }else{
             console.log(result)
             res.render('admin/databoxsettings', {
                clients: result
             })
        }
     }catch(err){
         console.log(err)
         createErrorNotification(req, res, err.message)
     }
}

exports.update_databox = async (req, res) =>{
    try{
        var url = req.body.url
        var id = req.body.clientid

        console.log(url, id)
        const {result, error} = await updateDatabox(id, url)

        if(error){
            createErrorNotification(req, res, error.message)
        }else{
            console.log(result)
            res.redirect('back')
       }

    }catch(err){
        console.log(err)
        createErrorNotification(req, res, err.message)
    }
}


