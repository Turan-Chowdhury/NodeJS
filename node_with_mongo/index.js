var MongoClient = require('mongodb').MongoClient;

var URL = "mongodb+srv://turan:123@cluster0.jkzvv.mongodb.net?retryWrites=true&w=majority";

var config = { useUnifiedTopology: true };

MongoClient.connect(URL, config,function (error, conn){
    if(error){
        console.log("Connection Fail")
    }
    else{
        console.log("Connection Success");
        //InsertData(conn);
        //DeleteOneItem(conn);
        //DeleteAllItem(conn);
        //FindOneWithoutCondition(conn);
        //FindOneWithCondition(conn);
        //FindAllData(conn);
        //FindAllDataByProjection(conn);
        //FindAllDataByQuery(conn);
        //FindAllDataByLimit(conn);
        //FindAllDataBySort(conn);
        //UpdateData(conn);
        //CreateCollection(conn);
        //DeleteCollection(conn);
    }
})

function InsertData(conn){
    var database = conn.db("nodejs");
    var collection = database.collection("student");
    var data = { name:"turan", roll:"01", class:"Ten", city:"CTG" };

    collection.insertOne(data, function (error){
        if(error){
            console.log("Data Insert Fail");
        }
        else{
            console.log("Data Insert Success");
        }
    })
}

function DeleteOneItem(conn){
    var database = conn.db("nodejs");
    var collection = database.collection("student");
    var condition = { roll:"03" };

    collection.deleteOne(condition, function (error){
        if(error){
            console.log("Data Delete Fail");
        }
        else{
            console.log("Data Delete Success");
        }
    })
}

function DeleteAllItem(conn){
    var database = conn.db("nodejs");
    var collection = database.collection("student");

    collection.deleteMany(function (error, resultObj){
        if(error){
            console.log("Delete Fail");
        }
        else{
            console.log(resultObj.result.n + " Item Deleted");
        }
    })
}

function FindOneWithoutCondition(conn){
    var database = conn.db("nodejs");
    var collection = database.collection("student");
    var condition = {  };

    collection.findOne(condition, function (error, result){
        if(error){
            console.log("Find Fail");
        }
        else{
            console.log(result);
        }
    })
}

function FindOneWithCondition(conn){
    var database = conn.db("nodejs");
    var collection = database.collection("student");
    var condition = { roll:"03" };

    collection.findOne(condition, function (error, result){
        if(error){
            console.log("Find Fail");
        }
        else{
            console.log(result);
        }
    })
}

function FindAllData(conn){
    var database = conn.db("nodejs");
    var collection = database.collection("student");

    collection.find().toArray(function (error, result){
        console.log(result);
    })
}

function FindAllDataByProjection(conn){
    var database = conn.db("nodejs");
    var collection = database.collection("student");

    var condition = {};
    var projection = {projection:{ name:'', roll:'' }}

    collection.find(condition, projection).toArray(function (error, result){
        console.log(result);
    })
}

function FindAllDataByQuery(conn){
    var database = conn.db("nodejs");
    var collection = database.collection("student");

    var condition = { roll:"02", class:"Ten"};

    collection.find(condition).toArray(function (error, result){
        console.log(result);
    })
}

function FindAllDataByLimit(conn){
    var database = conn.db("nodejs");
    var collection = database.collection("student");

    collection.find().limit(2).toArray(function (error, result){
        console.log(result);
    })
}

function FindAllDataBySort(conn){
    var database = conn.db("nodejs");
    var collection = database.collection("student");

    var sortPattern = {name:1}  // 1 means ascending and -1 means descending

    collection.find().sort(sortPattern).toArray(function (error, result){
        console.log(result);
    })
}

function UpdateData(conn){
    var database = conn.db("nodejs");
    var collection = database.collection("student");

    var condition = {roll:"02"};
    var newValues = { $set:{name:"zia",class:"Eight"} }

    collection.updateOne(condition, newValues, function (error, result){
        console.log(result);
    })
}

function CreateCollection(conn){
    var database = conn.db("nodejs");

    database.createCollection("teachers", function (error, result){
        console.log(result);
    })
}

function DeleteCollection(conn){
    var database = conn.db("nodejs");

    database.dropCollection("teachers", function (error, result){
        console.log(result);
    })
}