let http = require('http');
let fs = require('fs');

let server = http.createServer(function (req,res) {

    if(req.url == '/'){

        /*14 fs.readFile('home.html', function (error, data){
            res.writeHead(200, {'content-type':'text/html'});
            res.write(data);
            res.end();
        })*/

        //15 let data = fs.readFileSync('home.html');
        // res.writeHead(200, {'content-type':'text/html'});
        // res.write(data);
        // res.end();

        /*16 fs.writeFile('demo.txt', 'welcome to node js', function (error){

            if(error){
                res.writeHead(200, {'content-type':'text/html'});
                res.write('File write fail');
                res.end();
            }
            else{
                res.writeHead(200, {'content-type':'text/html'});
                res.write('File write success');
                res.end();
            }
        })*/

        /*17 let error = fs.writeFileSync('demoSync.txt', 'welcome to Sync file');

        if(error){
            res.writeHead(200, {'content-type':'text/html'});
            res.write('File write fail');
            res.end();
        }
        else{
            res.writeHead(200, {'content-type':'text/html'});
            res.write('File write success');
            res.end();
        }*/

        /*18 fs.rename('demo.txt', 'demoNew.txt', function (error){

            if(error){
                res.writeHead(200, {'content-type':'text/html'});
                res.write('File rename fail');
                res.end();
            }
            else{
                res.writeHead(200, {'content-type':'text/html'});
                res.write('File rename success');
                res.end();
            }
        })*/

        /*19 let error = fs.renameSync('demoSync.txt', 'demoSyncNew.txt');

        if(error){
            res.writeHead(200, {'content-type':'text/html'});
            res.write('File rename fail');
            res.end();
        }
        else{
            res.writeHead(200, {'content-type':'text/html'});
            res.write('File rename success');
            res.end();
        }*/

        /*20 fs.unlink('demoNew.txt', function (error){

            if(error){
                res.writeHead(200, {'content-type':'text/html'});
                res.write('File delete fail');
                res.end();
            }
            else{
                res.writeHead(200, {'content-type':'text/html'});
                res.write('File delete success');
                res.end();
            }
        })*/

        /*21 let error = fs.unlinkSync('demoSyncNew.txt');

        if(error){
            res.writeHead(200, {'content-type':'text/html'});
            res.write('File delete fail');
            res.end();
        }
        else{
            res.writeHead(200, {'content-type':'text/html'});
            res.write('File delete success');
            res.end();
        }*/

        /*22 fs.exists('demoo.txt', function (result){

            if(result){
                res.end("File exist");
            }
            else{
                res.end("File does no exist");
            }
        })*/

        /*23 let result = fs.existsSync('demo.txt');

        if(result){
            res.end("File exist");
        }
        else{
            res.end("File does no exist");
        }*/

    }
});

server.listen(5050);
console.log("Server Run Success");
