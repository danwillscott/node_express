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
                res.render('index', {users: {}});
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
    socket.on("form_submit", function (data){
        let user = new User({name: data.form_data[0].value, age: data.form_data[1].value});
        // console.log(user +  ' User Data');
        user.save(function(err) {
            if(err){
                socket.emit('return_form',  user.errors);
            } else {
                socket.emit('return_form',  user);
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
        console.log(quote);
        quote.save(function(err) {

            // console.log(err.message);
        });
        console.log(quote);
        socket.emit('return_quote', quote)
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

 let quote = new Quote({name: 'Dan', quote: 'This is a sweet Quote!'});
 console.log(quote);
 quote.save(function(err) {});



let users = User.find({}, function(err, users) {
});


Add User Request
app.post('/users', function(req, res) {
    console.log("POST DATA", req.body);
    // create a new User with the name and age corresponding to those from req.body
    let user = new User({name: req.body.name, age: req.body.age});
    // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
    user.save(function(err) {
        // if there is an error console.log that something went wrong!
        if(err) {
            console.log('something went wrong');
        } else { // else console.log that we did well and then redirect to the root route
            console.log('successfully added a user!');
            res.redirect('/');
        }
    })
});





 */
