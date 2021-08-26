// https://www.youtube.com/watch?v=BNC6slYCj50&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=10&ab_channel=AkshaySaini
// let & const in JS 🔥Temporal Dead Zone | | Namaste JavaScript Ep. 8

// let and const declarations are hoisted
// theyre hoisted differently than var
// let and const are "in the temporal deadzone"

console.log(b);
let a = 10;
var b = 100;
// output: undefined.
// because b is undefined
// but logging "a" will give an error, but that doesnt mean that it was not
// hoisted

// look at the browser debugger.
// intially, both "a" and "b" will be allocated memory
// but "a" is not in the same place as "b"
// b is within the global scope, but a is not.
// we cant access "a" until we assign a value to it.

// until we assign a value to "a", it is said that "a" is
// in a temporal deadzone. this deadzone ends when "a" is assigned a value.

// ****
// NOTE THE DIFFERENCE BETWEEN THE TWO ERRORS
// console.log(someVariable);
// Uncaught ReferenceError: Cannot access 'someVariable' before initialization
// console.log(someVariableThatDoesntExist);
//Uncaught ReferenceError: someVariableThatDoesntExist is not defined
// let someVariable = 10;
// ****

console.log(window.a);
// undefined
console.log(window.b);
// 100
//this happened because a is not in the same space as window

//****
// console.log('this console log wont run');
// let abc = 1;
// let abc = 2;
// Uncaught SyntaxError: Identifier 'abc' has already been declared
// error occured even before let abc=1; was reached
//****

//****
console.log('this console log will run');
var abc = 1;
var abc = 2;
//****

//****
// console.log('this console log wont run');
// const abc = 1;
// abc = 2;
// Uncaught SyntaxError: Identifier 'abc' has already been declared
//****

//****
// console.log('this console log wont run');
// const xyz;
// xyz= 2;
// Uncaught SyntaxError: Missing initializer in const declaration
//****

//****
// const bb = 100;
// bb = 1000;
// Uncaught TypeError: Assignment to constant variable.
// type error because bb is of type constant.
//****

// Note the when TypeErrors, SyntaxErrors and ReferenceErrors occur above

// good practices
/*
use consts
if not consts, use let
dont use var. 
*/

/*
push all inits and declarations to the top to avoid the temporal deadzone 
 */
