
const fetch = require('node-fetch')
const url_utils = require('../../utils/url_utils')


async function generateNavigatorIdService(charityName){
  let response = await fetch(url_utils.charity_generate_navigator_id + `&search=${charityName}`)
  let data = await response.json()

  if(data){
    return {
        result: data,
        error: null
    }
  }else{
    return {
        result: null,
        error: {
            message: "Failed to generate Id",
            type: "UNKNOWN_ERROR"
        } 
    }
  }
}



module.exports = generateNavigatorIdService