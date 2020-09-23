//TODO: changeIt
var mongoConfig = {
    host: process.env.MONGO_HOST,
    port: process.env.MONGO_PORT,
    dbName: process.env.MONGO_DB,
    username: process.env.MONGO_USER,
    password: process.env.MONGO_PASS,
    collection: process.env.MONGO_COLLECTION,
}

var MongoClient = require('mongodb').MongoClient;
var url = `mongodb://${mongoConfig.username}:${mongoConfig.password}@${mongoConfig.host}:${mongoConfig.port}/?authSource=${mongoConfig.dbName}`;

module.exports = function insertLog(request, response, success) {
    MongoClient.connect(url, function (err, db) {

        if (err) throw err;

        const dbo = db.db(mongoConfig.dbName);
        dbo.collection(mongoConfig.collection).insertOne(
            {
                time: new Date(),
                request: request,
                response: response,
                success: success
            },
            function (err, res) {
                if (err) throw err;
            });

        db.close();

    });
}

