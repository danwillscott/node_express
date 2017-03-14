/**
 * Created by danielscott on 3/13/17.
 */

// ***********************
// ***** Assignments *****
// ***********************

const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const flash = require('flash');
const path = require('path');
const _ = require('underscore');
const app = express();
const port = 5500;

// *********************
// ***** Set & Use *****
// *********************

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, './client/static')));
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

// *******************
// ***** Schemas *****
// *******************

require('./server/config/mongoose.js');

// ******************
// ***** Routes *****
// ******************

let routs_setter = require('./server/config/routes');
routs_setter(app);

app.listen(port, function () {
    console.log('Server running Port: ' + port);
});
