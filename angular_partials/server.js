/**
 * Created by danielscott on 3/17/17.
 */
let express  = require( 'express' ),
    path     = require( 'path' ),
    root     = __dirname,
    port     = process.env.PORT || 8000,
    app      = express();


app.use( express.static( path.join( root, 'client' )));
app.use( express.static( path.join( root, 'bower_components' )));


app.listen( port, function() {
    console.log( `server running on port ${ port }` );
});