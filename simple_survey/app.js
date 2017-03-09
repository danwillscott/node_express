let noDB = [];

let path = require('path');

let validSurvey = function (survey) {
    if(survey.name > '' && survey.location > '' && survey.language > '' && survey.comment > ''){
        noDB.push({name: survey.name, location: survey.location, language: survey.language, comment: survey.comment})
    } else {
        return false;
    }
};

// Set port number
let port = 5500;
// Load the express module (Where do you think this comes from?)
let express = require("express");
// Setting Session
let session = require('express-session');
// invoke let express and store the resulting application in var app
let app = express();
// Secure session
app.use(session({secret: 'SomeKindOfKey'}));
// Load body-parser in constant bodyParse
let bodyParser = require('body-parser');
// Tell the app to use bodyParse
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.get('/', function (request, response){
    response.render('index', {title: "my Express project"});
});

app.get("/survey", function (request, response){
    response.render('survey', {survey: noDB[noDB.length-1]} );
});

app.post('/survey_post', function (request, response){
    let postData = request.body;
    let survey = validSurvey(postData);

    return response.redirect('/survey');

});

// Port and listen for node
app.listen(port, function() {
    console.log("listening on port " + port);
});