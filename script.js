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
