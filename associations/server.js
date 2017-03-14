/**
 * Created by danielscott on 3/11/17.
 */
/**
 ******************
 ***** Assign *****
 ******************
 */
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const app = express();
/**
 ***************
 ***** Use *****
 ***************
 */
mongoose.Promise = global.Promise; // Use native promises
app.use(cookieParser('secret'));
app.use(session({cookie: { maxAge: 60000 }}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.use(flash());
app.set('views', path.join(__dirname, './views'));
app.set('static', path.join(__dirname, './static'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/associations', function (err, db) {
    if(err){
        console.log(err)
    } else {
        console.log("DB connected");
        // console.log(db)
    }
});

/**
 ******************
 ***** Schema *****
 ******************
 */

let Schema = mongoose.Schema;
let PostSchema = new mongoose.Schema({
    text: { type: String, required: [true, "You Must Enter Something" ], minlength: [4, "Minimum Of 4 characters required"] },
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, { timestamps: true });
// The 'type' property of the object inside of the array is an attribute
// that tells Mongoose what to look for.

// What would we need to add to make the below snippet work properly? Read your console!
let CommentSchema = new mongoose.Schema({
    // since this is a reference to a different document, the _ is the naming convention!
    _post: {type: Schema.Types.ObjectId, ref: 'Post'},
    text: { type: String, required: true, minlength: 4 },
}, {timestamps: true });

mongoose.model('Post', PostSchema);
mongoose.model('Comment', CommentSchema);

let Post = mongoose.model('Post');
let Comment = mongoose.model('Comment');

/**
 ******************
 ***** Routes *****
 ******************
 */

app.get('/', function (request, response) {
    Post.find({}).populate('comments').exec(function (err, post) {
        if(err){
            response.render('index', {find_post: post.errors, get_errors: true, post_err: request.flash('post')});
        } else {
            const flash_message = request.flash('post');
            console.log(post[2].comments.length);
            console.log(post[1].comments[0].text);
            // This is For comments => if (post[0].comments[0]  === false || undefined)
            response.render('index', {find_post: post, get_errors: false, flash_message: flash_message});
        }
    });

});

app.post('/new_post', function (request, response) {
    // console.log(request.body.new_post);
    Post.create({text: request.body.new_post}, function (err, result) {
        if(err){
            request.flash('post', [err.errors.text.message]);
            response.redirect('/');
        } else {
            response.redirect('/');
        }
    });
});

app.post('/new_comment', function (request, response) {
    console.log(request.body);

    Post.findOne({_id: request.body.post_id}, function (err, post) {
        if(err){
            response.redirect('/');
        } else {
            let comment = new Comment({text: request.body.new_comment});
            comment._post = post._id;
            post.comments.push(comment);
            comment.save(function(err){
                post.save(function(err){
                    if(err) { console.log('Error'); }
                    else { response.redirect('/'); }
                });
            });
        }
    });
});

/**
 *******************
 ***** Sockets *****
 *******************
 */
let server = app.listen(8000, function() { console.log("listening on port 8000"); });
let io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
    // New Post
    socket.on('new_post', function (data) {
        // Add Save to DB with conditionals with errors

        socket.emit('return_post', {post: data, error: false})
    });

    // Remove Post
    socket.on('remove_post', function (data) {
        // Add save to DB with conditionals with errors

        // change data to comment once complete
        socket.emit('post_removed', {post: data, errors: false})
    });

    // New Comment
    socket.on('new_comment', function (data) {
        // Add save to DB with conditionals with errors

        // change data to comment once complete
        socket.emit('return_comment', {comment:data, errors: false})
    });

    // Remove Comment
    socket.on('remove_comment', function (data) {
        // Add save to DB with conditionals with errors

        // change data to comment once complete
        socket.emit('comment_removed', {comment: data, errors: false})
    });

});

