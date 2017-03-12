/**
 * Created by Daniel Scott on 3/9/17.
 */
// Assign
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise; // Use native promises
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/basic_mongoose');
let UserSchema = new mongoose.Schema({
    name: {type: String, required: [true, 'You must have a name']},
    age: {type: Number, required: [true, 'Even time travles have ages']}
});

let QuoteSchema = new mongoose.Schema({
    name: {type: String, required: [true, 'You must have a name']},
    quote: {type: String, required: [true, "You can't have a blank quote!"]}
});


mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
mongoose.model('Quote', QuoteSchema);
let User = mongoose.model('User') ;// We are retrieving this Schema from our Models, named 'User'
let Quote = mongoose.model('Quote');
/**
            ******************
            ***** Routes *****
            ******************
*/

app.get('/', function(req, res) {
    Quote.find({}, function (err, quotes) {
        User.find({}, function(err, users) {
            if(users){
                res.render('index', {users: users, quotes: quotes});
            }else{
                res.render('index', {users: {}, quotes: {}});
            }
        }).exec();
    }).exec();
});

let server = app.listen(8000, function() { console.log("listening on port 8000"); });

/**
            *******************
            ***** Sockets *****
            *******************
*/

let io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
//      New User Socket
    socket.on("user_submit", function (data){
        let user = new User({name: data.form_data[0].value, age: data.form_data[1].value});
        // console.log(user +  ' User Data');
        user.save(function(err) {
            if(err){
                socket.emit('return_user',  {user: user.errors, errors: true});
            } else {
                socket.emit('return_user',  {user: user, errors: false});
            }
        });
    });


//      Remove User
    socket.on('remove_user', function (data) {
        console.log(data.user);
        User.find({_id: data.user}, function(err){}).remove().exec();
    });

//      New Quote
    socket.on('quote_submit', function (data) {
        let quote = new Quote({name: data.form_data[0].value, quote: data.form_data[1].value})
        quote.save(function(err) {
            if(err){
                socket.emit('return_quote', {quote: quote.errors, errors: true})
            } else {
                socket.emit('return_quote', {quote: quote, errors: false});
            }
        });
    });

//      Remove Quote
    socket.on('remove_quote', function (data) {
        console.log(data.quote);
        Quote.find({_id: data.quote}, function(err){}).remove().exec();
    });

});





/**
            ************************
            ***** SLUDGE FIELD *****
            ************************
 */
