# jsConcepts
Learning and documenting my JS concept tutorials. source->https://www.youtube.com/c/akshaymarch7/playlists

--- 
# Code
### setTimeout + Closures Interview Question 🔥 | Namaste 🙏 JavaScript Ep. 11
- https://www.youtube.com/watch?v=eBTBG4nda2A&ab_channel=AkshaySaini
```javascript
for (var j = 0; j < 5; j++) {
  setTimeout(function () {
    console.log(j);
  }, 0);
}
//output-> 5 5 5 5 5

function x() {
  for (var j = 0; j < 5; j++) {
    var i = 0;
    setTimeout(function () {
      console.log(i++);
    }, 0);
  }
  // output -> 0 1 2 3 4
  // this happened because js doesnt wait
  // for the settimeout to finish
  // all the settimeouts were stored somewhere else
  // and the loop continued as normal
  // at the end of the loop there were 5 setTimeouts
  // all of these timeouts had a refernce to the
  // variable i -> forming a closure with its env
  // now all the timedout functions will execute,
  // increasing the value of i.
}
//x();

function y() {
  for (let j = 0; j < 5; j++) {
    setTimeout(function () {
      console.log(j);
    }, 0);
  }
  // using let instead of var solves the issue
  // let has a blockscope
  // everytime the loop runs, theres a new j variable each time
  // its not refering to the same thing at each loop
  // so each setTimeout function refers to different functions
}
//y();

//SOLUTION WITHOUT LET
function y() {
  for (var j = 0; j < 5; j++) {
    function closure(j) {
      setTimeout(function () {
        console.log(j);
      }, 0);
    }
    closure(j);
  }
  //here the function closure gets the values of j by
  //value and not by reference, hence its basically a
  //new variable.
  //closure() forms a closure with this new variable,
  //and that is what is stored in memory by setTimeout.
  //output-> 0 1 2 3 4
}
y();


```
---
### Hoisting in JavaScript 🔥(variables & functions) | Namaste JavaScript Ep. 3
- https://www.youtube.com/watch?v=Fnlnw8uY6jo&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=4&ab_channel=AkshaySaini
```javascript
//Hoisting in JavaScript 🔥(variables & functions) | Namaste JavaScript Ep. 3
//https://www.youtube.com/watch?v=Fnlnw8uY6jo&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=4&ab_channel=AkshaySaini

//####
var x = 7;

function getName() {
  console.log('brrrr');
}

getName();
console.log(x);

//output
// brrrr
// 7

getName2();
console.log(y);
var y = 7;

function getName2() {
  console.log('brrrr');
}
//output
//brrrr
//undefined

getName2();
console.log(z);
var z = 7;

function getName3() {
  console.log('brrrr');
}
//output
//brrrr
//uncaught ReferenceError: z is not defined
// at script.js:30

//not defined vs undefined
//not defined -> the referred name is not in the memory
//undefined -> referred name in memory has no value
//###

console.log(getName4);
function getName4() {
  console.log('brrrr');
}
console.log(getName4);

//output
// ƒ getName4() {
//   console.log('brrrr');
// }
// ƒ getName4() {
//   console.log('brrrr');
// }

// notice that we were able to
// console log the function's code
// before initializing it, but we were not able to
// console log variables without initializing them

//behind the scenes:
// before execution, all variables and funcs get memory allocation
// refer to the "scope" in the devtool debugger.

// ###

console.log(getName5);
getName5();
var getName5 = () => {
  console.log('brbrbbrbrb');
};
//output
// undefined
// script.js:71 Uncaught TypeError: getName5 is not a function
//     at script.js:71

// this happened because getName5 was treated as a variable
//

//unrelated. wrote this to see the devtools callstack
var i = 0;
var j = 0;
function callstacc(j) {
  i++;
  j++;
  if (i < 5) {
    callstacc(j);
    console.log(i);
    console.log(j);
  }
}
callstacc(j);
//output
// 5
// 4
// 5
// 3
// 5
// 2
// 5
// 1

```
### How functions work in JS ❤️ & Variable Environment | Namaste JavaScript Ep. 4
- https://www.youtube.com/watch?v=gSDncyuGw0s&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=5&ab_channel=AkshaySaini
```javascript
// How functions work in JS ❤️ & Variable Environment | Namaste JavaScript Ep. 4
//https://www.youtube.com/watch?v=gSDncyuGw0s&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=5&ab_channel=AkshaySaini

var x = 1;
a();
b();
console.log(x);

function a() {
  var x = 10;
  console.log(x);
}

function b() {
  var x = 100;
  console.log(x);
}

// output
// 10
// 100
// 1

/* 
in the execution context-> memory will be allocated to x, a and b
x will hold undefined 
a and b will hold their function code

this global execution context will be pushed to the call stack

in the code, when the function a() is called, an execution context will be made for it
and this execution context will be stored inside its parent's execution context

it will also have a memory and a codesection, it will also have 
a variable x with memory allocated to it, and it will hold "undefined" 
in the beginning. 

this new execution context will be pushed to the callstack

during the execution of a()'s code, its variable x will get its value allocated to it.
Now, the console log inside function a() will look for the variable x in the 
local execution context.

after execution of a(), the whole execution context of a() will be deleted, 
and popped from the callstack. 

now b() will be called. the same steps as above will be followed 
create execution context within the global execution context ->
memory will be allocated to x -> value be allocated to x -> x will be console logged 
-> x will be found in the local exec context -> this execution context will be deleted and 
popped out of the stack.

finally the console log after the function calls will be executed, 
it will look for variable x and it will find x in the global execution context

now theres nothing more to execute, so finally the global execution context 
will be deleted, and be popped out of the call stack
*/


```

### SHORTEST JS Program 🔥window & this keyword | Namaste JavaScript Ep. 5
- https://www.youtube.com/watch?v=QCRpVw2KXf8&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=6&ab_channel=AkshaySaini
```javascript
//https://www.youtube.com/watch?v=QCRpVw2KXf8&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=6&ab_channel=AkshaySaini
//SHORTEST JS Program 🔥window & this keyword | Namaste JavaScript Ep. 5

/*
whenever a js program is run a global object(window), global exec context,
and a "this" variable is created. 

wherever js runs, theres a js engine running along with it. 
chrome as v8, etc etc. 

in case of browsers, this obj is called "window".
its created even if the JS file is empty 

at global level
this===window is true 

what is global space?
any code that we write, that is not inside any function


*/

var a = 10;
function b() {
  var x = 10;
}
console.log(window.a);
console.log(a);
console.log(this.a);
// ouput
// 10
// 10
// 10
```
### undefined vs not defined in JS 🤔 | Namaste JavaScript Ep. 6
- https://www.youtube.com/watch?v=QCRpVw2KXf8&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=6&ab_channel=AkshaySaini
```javascript
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

```
### https://www.youtube.com/watch?v=uH-tVP8MUs8&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=8&ab_channel=AkshaySaini

- The Scope Chain, 🔥Scope & Lexical Environment | Namaste JavaScript Ep. 7
```javascript

//1
function a() {
  // JS will first try to find "b" within the context of this function
  // upon not finding the var, it will expand its search to the parent context
  console.log(b);
}
var b = 10;
a();
//output: 10

//2
function cc() {
  aa();
  function aa() {
    // JS will first try to find "b" within the context of this function
    // upon not finding the var, it will expand its search to the parent context
    console.log(bb);
  }
}
var bb = 10;
cc();
//output: 10

//3
function ccc() {
  var bbb = 10;
  aaa();
  function aaa() {
    // JS will first try to find "b" within the context of this function
    // upon not finding the var, it will expand its search to the parent context
  }
}
ccc();
// console.log(bbb);
//output: Uncaught ReferenceError: bbb is not defined

// bbb was not in the global scope.

// a global execution context is created on running the program, and put on to the callstack
// the global space variables and functions will be allocated memory

// an execution context for ccc() will be created
// ccc has aaa and bbb in its scope, so they will be allocated memory in this execution context

// another exec context for aaa() will be created
// if there was anything to allocate memory to, then it would have been allocated

//wherever an exec context is created, a lexical env is also created
//LEXICAL ENVIRONMENT - its the local memory along with lexical env of its parent ******
// what is lexical? : hierarchy, example: aaa() is inside ccc() ie, aaa() is lexically inside ccc()

// every execution context has a reference to the lexical env of its parent
// at the global level, this reference points to null
// aaa -> ccc -> global -> null

// if we try to console log bbb inside of aaa, then JS will try to find
// bbb inside the lexical env of aaa
// lexical env of aaa = local memory of aaa + lexical env of ccc (its parent)
// is bbb will be found and logged

// this chaining of references is called the SCOPE CHAIN ******

// use the visual debugger to visualize
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

```

### https://www.youtube.com/watch?v=BNC6slYCj50&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=10&ab_channel=AkshaySaini
- let & const in JS 🔥Temporal Dead Zone | | Namaste JavaScript Ep. 8
```javascript

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

```