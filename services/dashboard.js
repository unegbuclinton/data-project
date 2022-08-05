const UserDao = require('../dao/user')

async function getDashboardData(){
  
    let [team, clients] = await Promise.all([UserDao.getStaticTeam(), UserDao.getStaticClients()]);

    if(team && clients){
        return {
            result: {team, clients},
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

async function getDashboardSummary(){
    let [clientsNumber, teamNumber] = await Promise.all([UserDao.totalNumberOfClients(), UserDao.totalNumberOfTeam()]);
    if(teamNumber && clientsNumber){
        return {
            result: {teamNumber, clientsNumber},
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

module.exports = {getDashboardData, getDashboardSummary}