/**
 * Created by Daniel Scott on 3/8/17.
 */
// require express and path
let express = require("express");
let path = require("path");
// create the express app
let app = express();
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
app.get('/', function(req, res) {
    res.render("index");
});

// this selects our port and listens
// note that we're now storing our app.listen within
// a variable called server. this is important!!

let server = app.listen(8000, function() {
    console.log("listening on port 8000");
});
// this is a new line we're adding AFTER our server listener
// take special note how we're passing the server
// variable. unless we have the server variable, this line will not work!!
let io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
    console.log("Socket Running");
    // Shows the socket id
    console.log(socket.id);
    socket.on("form_submit", function (data){
        console.log('Survey submitted with this data => ' + data.form_data);
        socket.emit('return_form', {response: data.form_data});
    })
});
