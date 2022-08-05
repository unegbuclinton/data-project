const createErrorNotification = require("../../../middlewares/toast/error")
const createSuccessNotification = require("../../../middlewares/toast/success")
const { createClientService } = require("../../../services/client")

exports.display_create_client = async (req, res) => {
    try{
        res.render('admin/createclient')
    } catch(err){
        createErrorNotification(req, res, err.message)
    }
}

exports.create_client = async (req, res) => {
    try{
       const data = req.body
       const {result, error} = await createClientService(data)
       if(error){
            createErrorNotification(req, res, error.message)
       }else{
            createSuccessNotification(req, res, 'Successfully Created Client')
       }
    } catch(err){
        createErrorNotification(req, res, err.message)
    }
}