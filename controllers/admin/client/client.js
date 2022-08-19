const createErrorNotification = require("../../../middlewares/toast/error")
const createSuccessNotification = require("../../../middlewares/toast/success")
const { createClientService, getAllClients, getSingleClient, deleteClient } = require("../../../services/client")

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


//View All Clients

exports.display_all_clients = async (req, res) => {
    try{
       const {result, error} = await getAllClients()
       if(error){
            createErrorNotification(req, res, error.message)
       }else{
            res.render('admin/clients',{
                clients: result
            })
       }
    }catch(err){
        console.log(err)
        createErrorNotification(req, res, err.message)
    }
}


// Display Single Client

exports.display_single_client = async (req, res) =>{
    try{
        const {result, error} = await getSingleClient(req.params.clientId)
        if(error){
             createErrorNotification(req, res, error.message)
        }else{
             console.log(result)
             res.render('admin/clientsingle', {
                clients: result
             })
        }
     }catch(err){
         console.log(err)
         createErrorNotification(req, res, err.message)
     }
}

exports.display_client_charity_navigator = async (req, res) =>{
    try {
        const {result, error} = await getSingleClient(req.params.clientId)
        if(error){
            createErrorNotification(req, res, error.message)
       }else{
            console.log(result)
            res.render('admin/charitynavigator', {
               clients: result
            })
       }
    } catch (err) {
        console.log(err)
         createErrorNotification(req, res, err.message)
    }
}


// delete Client
exports.delete_client = async (req, res) => {
    try{
       const {result, error} = await deleteClient(req.params.clientId)
       if(error){
            createErrorNotification(req, res, error.message)
       }else{
            res.redirect('back')
       }
    }catch(err){
        console.log(err)
        createErrorNotification(req, res, err.message)
    }
}