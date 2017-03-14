/**
 * Created by danielscott on 3/13/17.
 */
// require mongoose
const mongoose = require('mongoose');
// create the schema
const QuoteSchema = new mongoose.Schema({
    name: String,
    quote: String
});
// register the schema as a model
const Quote = mongoose.model('Quote', QuoteSchema);