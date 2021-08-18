//https://www.youtube.com/watch?v=B7iF6G3EyIk&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=8&ab_channel=AkshaySaini
//undefined vs not defined in JS 🤔 | Namaste JavaScript Ep. 6

// memory will be allocated to this var even before this line is executed
//trying to log "a" before executing this line will result in "undefined"

console.log(a);
//undefined
var a = 7;
console.log(a);
//7

// console.log(x);
//script.js:10 Uncaught ReferenceError: x is not defined

//undefined is a special keyword, it is assigned to vars until they are defiend

var b;
if (b === undefined) {
  console.log('b is undefined');
} else {
  console.log('b is not undefined');
}
//b is undefined

var c;
c = undefined;
//^ this is a total no-no. doesnt make sense to do this.
//  use null or similar keywords to say that the variable doesnt hold anything
