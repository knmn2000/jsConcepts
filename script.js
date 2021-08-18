//https://www.youtube.com/watch?v=uH-tVP8MUs8&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=8&ab_channel=AkshaySaini
//The Scope Chain, 🔥Scope & Lexical Environment | Namaste JavaScript Ep. 7

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
