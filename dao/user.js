const mongoose = require('mongoose')
const User = mongoose.model('User')

class UserDao{
   
    static async getUserByEmail(email){
        return await User.find({username: email})
    }

    static async createUser(data){
        return await User.register({fullNames:{firstname: data.firstname, lastname:data.lastname}, phone: data.phone, username: data.username, organization:{name: data.organizationName, website: data.organizationWebsite}}, data.password)
    }


    static async createAdmin(data){
        return await User.register({fullNames:{firstname: data.firstname, lastname:data.lastname}, phone: data.phone, username: data.username, isAdmin: true, role: data.permissions}, data.password)
    }

    static async signInAdmin(data){
        return await User.findOneAndUpdate({username: data.username , isAdmin: true}, {lastLogin: Date.now()})
    }

    static async getAllUsers(){
        return await User.find()
    }

    static async getStaticTeam(){
        return await User.find({isAdmin: true}).sort({$natural: -1}).limit(5)
    }

    static async getStaticClients(){
        return await User.find({isAdmin: !true}).sort({$natural: -1}).limit(5)
    }

    static async totalNumberOfClients(){
        return await User.find({isAdmin: !true}).count()
    }

    static async totalNumberOfTeam(){
        return await User.find({isAdmin: true}).count()
    }

    static async getAllTeam(){
        return await User.find({isAdmin: true})
    }

    static async getAllClients(){
        return await User.find({isAdmin: !true})
    }

    static async deleteClient(id){
        return await User.deleteOne({_id:id, isAdmin: !true})
    }
    
    static async getSingleClient(id){
        return await User.findOne({_id: id, isAdmin: !true})
    }

    static async updatedataBox(id, records){
        return await User.updateOne({_id: id, isAdmin: !true}, records)
    }

    static async signInClient(data){
        console.log(data)
        return await User.findOneAndUpdate({username: data.username , isAdmin: !true}, {lastLogin: Date.now()})
    }

}


module.exports = UserDao
 
