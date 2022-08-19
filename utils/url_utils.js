const settings = require('../config/index')


const url_utils = {
    charity_generate_navigator_id : `https://api.data.charitynavigator.org/v2/organizations?app_id=${settings.charityAppId}&app_key=${settings.charityAppKey}&searchType=NAME_ONLY` 
}


module.exports = url_utils