var MongoClient = require('mongodb').MongoClient;
var assert = require('assert'); 

// Connection URL
var url = 'mongodb://localhost:27017/conFusion';
// Use connect method to connect to the server
MongoClient.connect(url, function(err, db){
    assert(err, null);
    console.log('Connect correctly to server');
    var collection = db.collection('dishes');
    collection.insertOne({
        name: 'Useless carry',
        desciption: 'adjfakjdfka'
    }, function(err, result) {
        assert(err, null);
        console.log('After insert: ');
        console.log('result.ops');
        collection.find({}).toArray(function(err, docs){
            assert.equal(err, null);
            console.log('Found: ');
            console.log(docs);
            db.dropCollection('dishes', function(err, result){
                assert.equal(err, null);
                db.close();
            })
        });
    });
});