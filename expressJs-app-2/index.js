var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var multerr = multer();

var app = express();

//15 Simple Get Request
// app.get("/", function (req, res){
//     res.end("This is simple get request");
// })

//16 Get Request With URL Query
// app.get("/", function(req, res){
//     var firstName = req.query.firstName;
//     var lastName = req.query.lastName;
//     res.end(firstName + " " + lastName);
// })

//17 Get Request Header
// app.get("/", function(req, res){
//     var firstName = req.header('firstName')
//     var lastName = req.header('lastName')
//     res.end(firstName + " " + lastName);
// })

//18 Simple Post Request
// app.post("/", function (req, res){
//     res.end("This is simple post request");
// })

//19 Post Request With URL Query
// app.post("/", function(req, res){
//     var firstName = req.query.firstName;
//     var lastName = req.query.lastName;
//     res.end(firstName + " " + lastName);
// })

//20 Post Request Header
// app.post("/", function(req, res){
//     var userName = req.header('userName')
//     var password = req.header('password')
//     res.end("Username: " + userName + "  Password: " + password);
// })

//21 Post with JSON Body
// app.use(bodyParser.json());
// app.post("/", function(req, res){
//     let JSONData = req.body;
//     //res.send(JSON.stringify(JSONData));
//
//     let city = JSONData.city;  // JSON['city']
//     res.send(city);
// })

//22 Working With Multipart Form Data
// app.use(multerr.array());
// app.use(express.static('public'));
// app.post("/", function(req, res){
//     let JSONData = req.body;
//     res.send(JSON.stringify(JSONData));
// })

//23 File Uploads
// var storage = multer.diskStorage({
//     destination: function (req, file, callback){
//         callback(null, './uploads');
//     },
//     filename: function (req, file, callback){
//         callback(null, file.originalname);
//     }
// })
// var upload = multer({storage:storage}).single('myfile');
// app.post("/", function(req, res){
//     upload(req, res, function (error){
//         if(error){
//             res.send("File upload fail")
//         }
//         else{
//             res.send("File upload success");
//         }
//     })
// })

//25 Application level middleware
// app.use(function (req, res, next){
//     console.log("I am application level middleware");
//     next();
// })
//
// app.get("/", function (req, res){
//     res.send("Home Page");
// });
//
// app.get("/about", function (req, res){
//     res.send("About Page");
// });
//
// app.get("/contact", function (req, res){
//     res.send("Contact Page");
// });

//26 Route level middleware
app.use('/about', function (req, res, next){
    console.log("I am about middleware");
    next();
})

app.get("/", function (req, res){
    res.send("Home Page");
});

app.get("/about", function (req, res){
    res.send("About Page");
});

app.get("/contact", function (req, res){
    res.send("Contact Page");
});

app.listen(8000, function (){
    console.log("Server Run Success");
})