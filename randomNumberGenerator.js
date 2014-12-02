/**
 * Created by Namita Malik on 1/12/14.
 */

console.log(typeof Math.getRandom === 'undefined'); // true

Math.__proto__.getRandom = function (min, max) {  // Adding getRandom function to Math object
    if (min && max) {
        // If min and max both are provided
        if(max <= min) {
            return new Error("Max number can not be equal or less then min");
        } else {
            return parseInt(min + (Math.random() * (max - min))); // Our logic for getting a random number
        }
    } else if (min) { //  If only min provide, then that min will be max and min will be 0
        if(min < 1) {
            return new Error("Min number can not be less 1");
        } else {
            return parseInt(Math.random() * min)
        }
    } else { // If min and max both are not provided then return whatever Math.random returns.
        return Math.random();
    }
};

console.log(typeof Math.getRandom === "function"); // true
console.log(Math.getRandom(45, 65)); // Passing the range in which we need to generate a random number
console.log(Math.getRandom(45, 65)); // getRandom function will return any random number between 45 to 65
console.log(Math.getRandom(65)); // getRandom function will return any random number between 45 to 65