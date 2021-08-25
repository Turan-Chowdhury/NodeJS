let mysql = require('mysql');

let connectionConfiguration = { host: "localhost", user: "root", password: "", database: "nodejs" }

let conn = mysql.createConnection(connectionConfiguration);

conn.connect(function (error){
    if(error){ console.log("Connection Fail"); }
    else{
        console.log("Connection Success");
        //InsertData(conn);
        //DeleteDataById(conn);
        //UpdateData(conn);
        SelectData(conn);
    }
})

function InsertData(conn){
    let query = "INSERT INTO `student`(`name`, `roll`, `class`, `phone`, `city`) VALUES ('aziz', '03', 'Ten', '01876694630', 'CTG')";

    conn.query(query, function (error){
        if(error){
            console.log("Data Insert Fail");
        }
        else{
            console.log("Data Insert Success");
        }
    })
}

function DeleteDataById(conn){
    let query = "DELETE FROM student WHERE id='3'";

    conn.query(query, function (error){
        if(error){
            console.log("Data Delete Fail");
        }
        else{
            console.log("Data Delete Success");
        }
    })
}

function UpdateData(conn){
    let query = "UPDATE student SET city='DHAKA' WHERE id='2' ";

    conn.query(query, function (error){
        if(error){
            console.log("Data Update Fail");
        }
        else{
            console.log("Data Update Success");
        }
    })
}

function SelectData(conn){
    let query = "SELECT * FROM student";

    conn.query(query, function (error, data){
        if(error){
            console.log("Data Select Fail");
        }
        else{
            console.log(data);
        }
    })
}