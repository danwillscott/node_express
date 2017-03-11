let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);
let session = require('express-session');
let port = process.env.PORT || 3000;

let users = [{name: 'Dan'}, {name: 'Bob'}, {name: 'Fred'}];

app.use(session({secret: 'codingdojorocks'}));

app.get('/', function(req, res){
    // req.session();
    res.sendFile(__dirname + '/index.html');
});


io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        session.lastmessage = msg;
        io.emit('chat message', msg, session.lastmessage);
    });
});

http.listen(port, function(){
    console.log('listening on *:' + port);
});