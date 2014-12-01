/**
 * Created by namita on 1/12/14.
 */

Math.__proto__.getRandom = function(x,y){
    return parseInt(x + (Math.random()*(y-x)))
}
console.log(Math.getRandom(45,65));