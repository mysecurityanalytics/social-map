//TODO: changeIt
var mongoConfig = {
    host: "localhost",
    port: "27017",
    dbName: "SOCIALMAP",
    username: "<USERNAME>",
    password: "<PASSWORD>",
    collection: "socialMapLogs"
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

