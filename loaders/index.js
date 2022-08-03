const ExpressLoader = require('./expressloader')
const MongooseLoader = require('./mongooseloader')

async function mainStarter(){
    try {
       await MongooseLoader.connectMongoose();
       console.log('mongoConnection sucessful');
       await ExpressLoader.startExpress()
       console.log('Express Initialized');
    } catch (error) {
        console.log(error)
    }
   
}

module.exports = mainStarter