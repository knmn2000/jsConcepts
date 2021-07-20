# jsConcepts
Learning and documenting my JS concept tutorials. source->https://www.youtube.com/c/akshaymarch7/playlists

--- 
# Code
```javascript
//setTimeout + Closures Interview Question 🔥 | Namaste 🙏 JavaScript Ep. 11
//https://www.youtube.com/watch?v=eBTBG4nda2A&ab_channel=AkshaySaini

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
