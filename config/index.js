const dotenv= require('dotenv')
dotenv.config();

const settings = {
    port:process.env.PORT,
    databaseURL:process.env.DATABASE_URL,
    sessionSecret: process.env.SECRET
}

module.exports = settings