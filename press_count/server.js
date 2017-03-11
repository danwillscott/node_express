/**
 * Created by danielscott on 3/9/17.
 */


// server assignments

let path = require('path');
let port = 8000;
let express = require("express");
let app = express();
let session = require('express-session');
let bodyParser = require('body-parser');

// app.user requirements
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, './static')));

// Session setup
app.set('trust proxy', 1); // trust first proxy
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}));

// app.set requirements
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    session.count = 0;
    res.render('index')
});

let server = app.listen(port);

let io = require('socket.io').listen(server);


io.sockets.on('connection', function (socket) {
    socket.on('counter', function (socket_data) {
        session.count += 1;
        socket.emit('return_click', {count_return: session.count})
    })
});