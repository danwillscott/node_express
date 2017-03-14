/**
 * Created by danielscott on 3/13/17.
 */

const mongoose = require('mongoose');
const Quote = mongoose.model('Quote');
module.exports = {
    show: function(req, res) {
        Quote.find({}, function(err, quotes) {
            res.render('main', {quotes: quotes});
        })
    },
    create: function(req, res) {
        const quote = new Quote({name: req.body.name, quote: req.body.quote});
        quote.save(function(err) {
            if(err){
                console.log("something went wrong");
            } else {
                res.redirect('/main');
            }
        })
    }
};