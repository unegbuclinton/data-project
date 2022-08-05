const UserDao = require('../dao/user')

async function getSingleDatabox(id){
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


async function updateDatabox(id, url){
    console.log(id)

    var records = {
       dataBox : url,
    }
    
    const result = await UserDao.updatedataBox(id, records)

    if(result){
        return{
            result: result,
            error:null
        }
    }else{
        return {
            result: null,
            error:{
                message: "Failed To update Client",
                type: "ERROR_UPDATING_DB"
            }
        }
    }
}



module.exports = {getSingleDatabox, updateDatabox}