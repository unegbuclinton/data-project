const UserDao = require('../dao/user')


async function createTeamService(data){
    const team = await UserDao.getUserByEmail(data.username)
    if(team.length > 0){
        return {
            result: null,
            error:{
                message: "Admin Already Exists With this Email",
                type: "USER_ALREADY_EXISTS"
            } 
        }
    }
   
    const newTeam = await UserDao.createAdmin(data)
    if(newTeam){
        return {
            result: newTeam,
            error: null
        }
    }else{
        return {
            result: null,
            error: {
                message: "Failed To Create Team",
                type: "UNKNOWN_ERROR"
            } 
        }
        
    }

}

async function getAllTeam(){
    // will paginate later
    const team = await UserDao.getAllTeam()
    if(team){
        return {
            result: team,
            error: null
        }
    }else{
        return{
            result: null,
            error:{
                message: err.message,
                type: "ERROR_FETCHING_FROM_DB"
            } 
        }
    
    }
}

module.exports = {createTeamService, getAllTeam}