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

// // // //
