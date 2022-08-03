const mongoose = require('mongoose')
const User = mongoose.model('User')

class UserDao{
   
    static async getUserByEmail(email){
        return await User.find({username: email})
    }

    static async createUser(firstname, lastname, username, phone, password, organizationName, organizationWebsite ){
        return await User.register({names:{firstname,lastname}, phone: phone, username: username, organization:{name:organizationName, website: organizationWebsite}}, password)
    }

    static async getAllUsers(){
        return await User.find()
    }


   
}


module.exports = UserDao
 
