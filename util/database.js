// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;

// let _db;

// const mongoConnect = (callback) => {
// 	MongoClient.connect(
// 		"mongodb+srv://shams_ivon:MQJv5.EqXeR4vhZ@cluster0.flwxpbo.mongodb.net/test"
// 	)
// 		.then((result) => {
// 			console.log("connected");
// 			_db = client.db();
// 			callback();
// 		})
// 		.catch((err) => {
// 			console.log(err);
// 		});
// };

// const getDb = () => {
// 	if (_db) {
// 		return _db;
// 	}
// 	throw "No database found";
// };

// exports.mongoConnect = mongoConnect;
// exports.getDb = getDb;
