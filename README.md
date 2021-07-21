# jsConcepts
Learning and documenting my JS concept tutorials. source->https://www.youtube.com/c/akshaymarch7/playlists

--- 
# Code
---
- setTimeout + Closures Interview Question 🔥 | Namaste 🙏 JavaScript Ep. 11
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
- Hoisting in JavaScript 🔥(variables & functions) | Namaste JavaScript Ep. 3
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
// console.log(z);
// var z = 7;

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
// getName5();
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
