const UserDao = require('../dao/user')


async function createClientService(firstname, lastname, username, phone, password, organizationName, organizationWebsite){
    const client = await UserDao.getUserByEmail(username)
    console.log('phone:::' + phone)
    if(client.length > 0){
        return {
            result: null,
            error:{
                message: "Client Already Exists With this Email",
                type: "USER_ALREADY_EXISTS"
            } 
        }
    }
   
    const newClient = await UserDao.createUser(firstname, lastname, username, phone, password, organizationName, organizationWebsite)

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