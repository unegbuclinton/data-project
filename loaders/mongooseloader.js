const mongoose = require("mongoose")
const settings = require('../config/index')

const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology : true,
};
  

class MongooseLoader{
    static async connectMongoose(){
        const connection = await mongoose.connect(settings.databaseURL, mongooseOptions)
        return connection.connection.db;
    }
}


module.exports = MongooseLoader