const {MongoClient} = require('mongodb')
const URL = 'mongodb://0.0.0.0:27017/Cake'

let dbConnection;

module.exports = {
    connectToDb: (cd) =>{
        MongoClient
        .connect(URL)
        .then((client) => {
            console.log('Connected to MongoDB');
            dbConnection = client.db();
            return cd ();
        })
        .catch((err) =>{
            return cd (err);
        })
    },
    getDb: () => dbConnection,
}