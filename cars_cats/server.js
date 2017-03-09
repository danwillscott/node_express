/**
 * Created by danielscott on 3/7/17.
 */
// port
let port = 7077;
// get http module
let http = require('http');
// file system
let fs = require('fs');
// server
let server = http.createServer(function (request, response) {
    console.log('in side server requesting...', request.url);

    //routing callback
    function this_route(location, content_type, utf) {
        if (utf === true){ utf = 'utf8'}
        fs.readFile(location, utf, function (errors, contents) {
            response.writeHead(200, {'Content-Type': content_type});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }

    // URLS
    if (request.url === '/'){
        this_route('index.html', 'text/html');
    } else if(request.url === '/cars'){
        this_route('car.html', 'text/html', true);
    } else if (request.url === '/cats'){
        this_route('cat.html' , 'text/html', true);
    } else if (request.url === '/cars/new') {
        this_route('new_car.html', 'text/html', true);
    }
    // Images
    else if (request.url === '/images/phone1'){
        this_route('images/phone1.png', 'image/png');
    }
    // Styles
    else if(request.url === '/styles/style'){
        this_route('styles/style.css', 'text/css', true);
    }
    // Scripts
    else if (request.url === '/scripts/script'){
        this_route('scripts/script.js', 'text/javascript', true);
    }
    // If Not Found
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }



});

server.listen(port);

console.log("simple node server running on port ", port);