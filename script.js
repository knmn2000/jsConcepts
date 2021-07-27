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
