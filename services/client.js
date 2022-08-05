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

module.exports = {createClientService}