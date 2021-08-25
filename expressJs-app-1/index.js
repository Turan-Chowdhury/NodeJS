var express = require('express');
var app = express();

//02
app.get("/", function (req, res){
    res.send("Hello Express Js");
});

//03
app.get("/", function (req, res){
    res.send("Home Page");
});

app.post("/about", function (req, res){
    res.send("About Page");
});

app.put("/contact", function (req, res){
    res.send("Contact Page");
});

app.delete("/terms", function (req, res){
    res.send("Terms Page");
});

//07
app.get("/status", function (req, res){
    res.status(401).end("Unathorised");
});

//08
app.get("/json", function (req, res){
    let jsonArray = [
        {
            name: "turan",
            city: "ctg"
        },
        {
            name: "zia",
            city: "dhaka"
        },
        {
            name: "tarek",
            city: "comilla"
        }
    ]

    res.json(jsonArray);
});

//09
app.get("/download", function (req, res){
    res.download("./uploads/91.jpg");
});

//10
app.get("/bangladesh", function (req, res){
    res.redirect("http://localhost:8000/india");
});

app.get("/india", function (req, res){
    res.send("This is india.");
});

//11
app.get("/header", function (req, res){
    res.append("name", "turan");
    res.append("city", "dhaka");

    res.status(201).end("Hello World");
});

//12
app.get("/setCookie", function (req, res){
    res.cookie('name', 'turan');
    res.cookie('city', 'ctg');

    res.end("cookie set success");
});

//13
app.get("/clearCookie", function (req, res){
    res.clearCookie('name');
    res.clearCookie('city');

    res.end("cookie clear success");
});

app.listen(8080, function (){
    console.log("Server Run Success");
})