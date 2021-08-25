let http = require('http');
let URL = require('url');

let server = http.createServer(function (req,res) {

    //4 res.end("hello world");

    /*6 if(req.url == '/'){
        res.writeHead(200, {'content-type':'text/html'});
        res.write('<h1>This is Home page</h1>');
        res.end();
    }
    else if(req.url == '/about'){
        res.writeHead(200, {'content-type':'text/html'});
        res.write('<h1>This is About page</h1>');
        res.end();
    }
    else if(req.url == '/contact'){
        res.writeHead(200, {'content-type':'text/html'});
        res.write('<h1>This is Contact page</h1>');
        res.end();
    }*/

    let myURL = "http://rabbil.com/blog.html?year=2020&month=july";

    let myURLobj = URL.parse(myURL, true);

    let myHostName = myURLobj.host;
    let myPathName = myURLobj.pathname;
    let mySearchName = myURLobj.search;

    res.writeHead(200, {'content-type':'text/html'});
    res.write(myHostName);
    res.end();

});

server.listen(5050);
console.log("Server Run Success");
