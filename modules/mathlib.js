/**
 * Created by danielscott on 3/7/17.
 */

module.exports = function (){
    return {

        // Adds the two numbers together
        add: function(num1, num2) {
            return num1 + num2;
        },

        //Multiplies Num1 * Num2
        multiply: function(num1, num2) {
            return num1 * num2;
        },

        // Squares a Number
        square: function(num) {
            return num * num;
        },

        // Inclusive of Max number
        randomNum: function(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min + 1;
        }
    }
};