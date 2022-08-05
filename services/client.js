const UserDao = require('../dao/user')


async function createClientService(data){
    const client = await UserDao.getUserByEmail(data.username)
    if(client.length > 0){
        return {
            result: null,
            error:{
                message: "Client Already Exists With this Email",
                type: "USER_ALREADY_EXISTS"
            } 
        }
    }
   
    const newClient = await UserDao.createUser(data)

    if(newClient){
        return {
            result: newClient,
            error: null
        }
    }else{
        return {
            result: null,
            error: {
                message: "Failed To Create Client",
                type: "UNKNOWN_ERROR"
            } 
        }
        
    }

}


async function getAllClients(){
    // will paginate later
    const clients = await UserDao.getAllClients()
    if(clients){
        return {
            result: clients,
            error: null
        }
    }else{
        return{
            result: null,
            error:{
                message: "Failed To fetch Client",
                type: "ERROR_FETCHING_FROM_DB"
            } 
        }
    
    }
}

async function deleteClient(id){
    const result = await UserDao.deleteClient(id)

    if(result){
        return{
            result: result,
            error:null
        }
    }else{
        return {
            result: null,
            error:{
                message: "Failed Todelete Client",
                type: "ERROR_DELETING_FROM_DB"
            }
        }
    }
}

async function getSingleClient(id){
    console.log(id)
    const client = await UserDao.getSingleClient(id)

    if(client){
        return {
            result: client,
            error: null
        }
    }else{
        return{
            result: null,
            error:{
                message: "Failed To get single Client",
                type: "ERROR_FETCHING_FROM_DB"
            } 
        }
    }
}


module.exports = {createClientService, getAllClients, deleteClient, getSingleClient}