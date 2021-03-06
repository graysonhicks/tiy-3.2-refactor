//////////////////////////////////////////////////
//////////////////////////////////////////////////
//     ___  ___________  _______________  ___   //
//    / _ \/ __/ __/ _ |/ ___/_  __/ __ \/ _ \  //
//   / , _/ _// _// __ / /__  / / / /_/ / , _/  //
//  /_/|_/___/_/ /_/ |_\___/ /_/  \____/_/|_|   //
//                                              //
// The below assignment has 10 questions with 1 //
// bonus question. Each question has a specific //
// area for you to put your answer. That is the //
// only part that should be changed. Do not     //
// edit the code in the question. Your answers  //
// should be valid javascript and any comments  //
// should be commented out. When finished this  //
// entire document should be valid javascript.  //
//                                              //
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 1. --------------------------------------------

// This is a named function, convert it
// to a variable containing an anonymous
// function

function doSomethingCool() {
  console.log("Something Cool!");     //function declaration
}

// Put your answer below -------------------------

var doSomethingCool = function(){
  console.log("Something Cool!");   // function expression
};

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 2. --------------------------------------------

// Here we are using setTimeout to call a function
// after 2 seconds. Refactor to use an anonymous
// function

function sayHi() {
  alert("Hello, World!");
}

setTimeout(sayHi, 2000);

// Put your answer below -------------------------

var sayHi = function(){
  alert("Hello, World!");
};

setTimeout(sayHi, 2000);

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 3. --------------------------------------------

// The code below will log the letter twice. What
// is the order that will be logged?

// [a]: x then y then z
// [b]: y then z
// [c]: z then y
// [d]: x then z

// Please explain your answer.

var letter = "x";

setTimeout(function(){
  letter = "y";
  console.log("The letter is", letter);  // changes execution stack, JS is single threaded so skips to next
}, 1);

letter = "z";
console.log("The letter is", letter);

// Put your answer below -------------------------

// [c] z then y
//  Normally it would be [b] y then z, but because the set timeout delays it, the interpreter moves on to the next code block which is printed while the delay must now wait on that to print first, by the time the delay is over, z has already printed

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 4. --------------------------------------------

// The function below reverses a string. The body
// of the function is 5 lines of code. Refactor
// this function to do the same thing with 1 line

var reverseStr = function(str) {
  var arr;
  arr = str.split("");
  arr = arr.reverse();
  str = arr.join("");
  return str;
};

// Put your answer below -------------------------

var reverseStr = function(str) {
  return str.split("").reverse().join("");    //method chaining
};

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 5. --------------------------------------------

// The function below takes the spanish word for
// the colors red, white, blue, green, and black
// and returns the hex code for that color.
// Refactor this function to use an object
// instead of an if/else statement.

var spanishColor = function(colorName) {
  if (colorName.toLowerCase() === "rojo") {
    return "#ff0000";
  }
  else if (colorName.toLowerCase() === "blanco") {
    return "#ffffff";
  }
  else if (colorName.toLowerCase() === "azul") {
    return "#0000ff";
  }
  else if (colorName.toLowerCase() === "verde") {
    return "#00ff00";
  }
  else if (colorName.toLowerCase() === "negro") {
    return "#000000";
  }
};

// Put your answer below -------------------------

var spanishColorObject = {
  rojo: "#ff0000",
  blanco: "#ffffff",
  azul: "#0000ff",
  verde: "#00ff00",
  negro: "#000000"
};

function colorFinder(obj, color) {
  console.log("The hex value for " + color + " is " + obj[color]);
}

colorFinder(spanishColorObject, "rojo");

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 6. --------------------------------------------

// Below is a variable *declaration* and an
// *assignment* in a single line of code.
// Break it up so that the declaration and
// assignment are happening on 2 seperate lines.

var foo = "bar";


// Put your answer below -------------------------
 var foo;

 foo = "bar";

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 7. --------------------------------------------

// The function `callTenTimes` takes an argument
// that is another function and will call that
// function 10 times. Refactor this into another
// function called `callNtimes` that allows you
// to specify a number of times to call the given
// function.

var callTenTimes = function(callback) {
  var range = _.range(10);
  _.each(range, callback);
};

// Put your answer below -------------------------

var callNtimes = function(callback, number){ //pass in function and number of times to run
  var range = _.range(number);  //underscore range makes an array, the argument says how many
  _.each(range, callback); //underscore each is like a for loop, with how many to run, then what to run
};

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 8. --------------------------------------------

// Below is the beginning code for an awesome game
// but already suffers a vulnerability that allows
// the savvy user to open the console and adjust
// the score to whatever they want. Refactor the
// code to protect from this.

// HINT: "global scope"

var score = 0;

var increaseScore = function() {
  score++;
};

var decreaseScore = function() {
  score--;
};

// Put your answer below -------------------------
(function(){                              //wrap in IIFE for protection

  var score = 0;

  var increaseScore = function() {
    score++;
  };

  var decreaseScore = function() {
    score--;
  };

}());
// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 9. --------------------------------------------

// The below function does not work. The variable
// twoPlusTwo gets set to `undefined`. Refactor
// the function to make it work.

var addNumbers = function(numberA, numberB) {
  console.log(numberA + numberB);
};

var twoPlusTwo = addNumbers(2,2);

// Put your answer below -------------------------

var addNumbers = function(numberA, numberB) {
  console.log(numberA + numberB);
  return (numberA + numberB); // this value must be returned so it is kicked out of the fucntion
};

var twoPlusTwo = addNumbers(2,2);
console.log(twoPlusTwo);

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 10. -------------------------------------------

// Below is a snippet of code taken from a racing
// game (not really!) It allows you to accelerate
// the speed by a given amount. The problem is if
// you call the function without specifying an
// amount, it inadvertently sets the speed to NaN
// First write a comment that explains why it was
// setting speed to NaN when no parameter is given
// Then refactor the function to have a default
// amount of 1 if no param is given.

// var speed = 0;
//
// var accelerate = function(amount) {
//   speed += amount;
// };

// Put your answer below -------------------------

//it doesnt work if you dont pass parameter because an undefined parameter is not a number, and a number plus something thats not a number is not a number (NaN).  we need to check first and see if it has been defined

var speed = 0;

var accelerate = function(amount) {
  if(amount) { // this checks to see if it has been passed in with a value
    speed += amount; //if so, run the way we had it
    console.log(amount);
  } else { // otherwise add one to speed, and take amount out of the equation so it doesnt throw it off
    speed += 1;
    console.log(speed);
  }
};

accelerate();

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//            ___  ____  _  ____  ______        //
//           / _ )/ __ \/ |/ / / / / __/        //
//          / _  / /_/ /    / /_/ /\ \          //
//         /____/\____/_/|_/\____/___/          //
//                                              //
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// The function below allows you to call another
// function at a later time. It takes 2 params, an
// amount of miliseconds and a function. It will
// call the function that many miliseconds later.
// Refactor it so that is has a default timeout.

// This is more advanced than the default param on
// the accelerate function. This is because there
// is another parameter to consider.

// When setting the timeout, the function needs to
// work like this:

//     callLater(1000, function(){
//       ...
//     });

// When using the default timeout, the function
// needs to work like this:

//     callLater(function(){
//       ...
//     });

var callLater = function(timeout, callback) {
  setTimeout(callback, timeout);
};

// Put your answer below -------------------------

var callLater = function(timeout, callback) {
  if(callback) { //if a second value is passed in, then run it below, as is normal in setTimeout
    setTimeout(callback, timeout);
  } else {
    setTimeout(timeout, 1000); //if only one value passed in, assume it is a function with no timeout, so treat it as a function in this setTimeout and give it a default timeout of 1000
  }

};

// -----------------------------------------------

//////////////////////////////////////////////////
