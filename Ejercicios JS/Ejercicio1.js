//DECLARACIONES STATEMENTS

var today = new Date();
var hourNow = today.getHours();
var greeting;

if(hourNow > 18) {
    greeting = "Is to late My MAN"
}else if (hourNow > 12) {
    greeting = "Good afternoon"
}else if (hourNow > 0) {
    greeting = "Good morning"
} else {
    greeting = "Welcome"
}

console.log(greeting)