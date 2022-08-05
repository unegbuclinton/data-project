const UserDao = require('../dao/user')


async function signInAdmin(data){
    const admin = await UserDao.signInAdmin(data)
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

module.exports = {signInAdmin}

