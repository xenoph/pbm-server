const MongoClient = require('mongodb').MongoClient;

async function setupMongodbClient() {
    const client = await MongoClient.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    const mongodb = await client.db();

    const db = {
        mongodb,
        Teams: mongodb.collection('Teams'),
        Players: mongodb.collection('Players'),
    };

    return db;
}

module.exports = setupMongodbClient;
