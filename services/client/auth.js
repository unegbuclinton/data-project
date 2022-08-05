const UserDao = require('../../dao/user')


async function signInClient(data){
    const admin = await UserDao.signInClient(data)
    if(admin){
       return {
            result: {
                admin
            },
            error:null
       }
    }else{
        return {
            result: null,
            error:{
                message: "User doesn't exist",
                type: "USER_NOT_FOUND"
            } 
        }
    }
   
   

}

module.exports = {signInClient}

