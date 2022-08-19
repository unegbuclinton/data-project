const dotenv= require('dotenv')
dotenv.config();

const settings = {
    port:process.env.PORT,
    databaseURL:process.env.DATABASE_URL,
    sessionSecret: process.env.SECRET,
    charityAppId: process.env.CHARITY_APP_ID,
    charityAppKey: process.env.CHARITY_APP_KEY
}

module.exports = settings