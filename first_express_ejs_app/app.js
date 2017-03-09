/**
 * Created by danielscott on 3/7/17.
 */
// Hard Coded User
let users_array = [
    {name: "Michael", email: "michael@codingdojo.com", id: 1},
    {name: "Jay", email: "jay@codingdojo.com", id: 2},
    {name: "Brendan", email: "brendan@codingdojo.com", id: 3},
    {name: "Andrew", email: "andrew@codingdojo.com", id: 4}
];
let path = require("path");

let new_users = [];
let counter = 5;

let find_old = function (obj, val, second) {
    for(let x = 0; x < obj.length; x += 1){
        // console.log(obj[x].id);
        if(obj[x].id == val){
            // console.log(obj[x]);
            return (obj[x]);
        }
    }
    for(let i = 0; i < second.length; i+= 1){
        if(second[i].id == val){
            return (second[i]);
        }
    }
};

let delete_user = function (obj, val, second) {
    let spliced;
    for(let x = 0; x < obj.length; x += 1){
        // console.log(obj[x].id);
        if(obj[x].id == val){
            spliced = obj.splice(x, 1);
            return spliced;
        }
    }
    for(let i = 0; i < second.length; i+= 1){
        if(second[i].id == val){
            spliced = second.splice(i, 1);
            return spliced;
        }
    }
};

// Set port number
let port = 8000;
// Load the express module (Where do you think this comes from?)
let express = require("express");
// Setting Session
let session = require('express-session');
// invoke let express and store the resulting application in var app
let app = express();
// Secure session
app.use(session({secret: 'codingdojorocks'}));
// Load body-parser in constant bodyParse
let bodyParser = require('body-parser');
// Tell the app to use bodyParse
app.use(bodyParser.urlencoded({extended: true}));

// let's handle the base route "/" and respond with "Hello Express"
// app.get('/', function(request, response) {
//     response.send("<h1>Hello Express</h1>");
// });

// TODO This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views');

// Set the view engine to ejs
app.set('view engine', 'ejs');


// Get requests

app.get('/', function (request, response){
    response.render('index', {title: "my Express project", session: request.session});
});

app.get("/users", function (request, response){
    response.render('users', {users: users_array, new_users: new_users, session: request.session} );
});

app.get("/delete/:id", function (request, response){
    delete_user(users_array, request.params.id, new_users);
    response.redirect('/users');
});

app.get("/user_id/:id", function (request, response){
    let this_user = find_old(users_array, request.params.id, new_users);
    console.log(this_user);
    console.log(request.params.id);
    response.render('user_id', {user: this_user, session: request.session} );
});


// Post Data

// route to process new user form data:
app.post('/users_post', function (request, response){
    let post_data = request.body;
    console.log(counter);
    new_users.push({name: post_data.name, email: post_data.email, id: counter});
    console.log(new_users);
    request.session.name = post_data.name;
    request.session.email = post_data.email;
    request.session.id = counter;
    counter += 1;
    // console.log("POST DATA \n\n", request.body);
    response.redirect('/users');
});

// Run App

// Set app to listen on constant port and run a console.log of it
app.listen(port, function() {
    console.log("listening on port " + port);
});