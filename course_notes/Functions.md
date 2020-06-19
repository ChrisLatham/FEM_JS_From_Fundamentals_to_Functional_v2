---
tags: ['JavaScript: From Fundamentals to Functional JS']
title: Functions
created: '2020-06-14T18:32:12.110Z'
modified: '2020-06-14T21:00:24.930Z'
---

# Functions

## Anatomy of Functions

~~~js
function functionName (param1, param2){
  let result = param1 + param2;
  return result;
};
let [arg1, arg2] = [1, 1];
console.log(functionName(arg1, arg2)); // 2
~~~

#### Definitions

Functions are defined with the keyword "function". 

#### Function Names

The name of the function usually follows after the keyword, but it can also be assigned using a variable, and can even be anonymous in the case of callback functions.

~~~js
var functionName = function (){
  return 0;
};
~~~

#### Invocations

When a function is invoked the code in the function body is executed. Functions are _always_ invoked using parentheses, and must always be defined first. In most cases functions are invoked by declaring their name with the parentheses on the end.

~~~js
functionName(); // Most common invocation

(function (){return 0;})(); // An example of an immediately invoked function
~~~

#### Arguments

Arguments are values that are then used by the code inside the function body. Arguments go between the parentheses when it is being invoked.

~~~js
functionName(argument1, argument2);
~~~

#### Parameters

Parameters are the variable names for the arguments. Parameters are placed inside the parentheses of the function definition. The parameter values, or arguments, are then referenced inside the function body using the parameter names.

~~~js
function functionName (parameter1, parameter2){
  //function body
};
~~~

#### Function Bodies

The body of the function is enclosed between the curly braces of the definition. The function body contains the code that is to be executed when the function is invoked.

#### Return Values

Functions can return values outside of their own scope using the _return_ keyword.

#### Side Effects

Side effects are anything that reaches beyond the scope of the function where it was executed. An example of this is _console.log_, because it goes into the console and creates a log. Anything that uses the DOM is considered a side effect.

## ES6: Arrow Functions

Arrow functions don't have their own value for either _arguments_ or _this_ keywords. They are best used for short statements that don't require return values or complex calculations.

A comparison of the syntax in the code below.

~~~js
myArray.forEach(function (value){console.log(value);})
myArray.forEach(value => console.log(value))
~~~

The only things that remain are the function parameter and the code that was inside the function body.

## Projecting

Where you take a value out of a data structure and turn it into another data structure.

Example that expands on code from earlier. Mapping the object data from suspectsOnVideo into an array of names.

~~~js
let suspectsOnVideo = underscore.filter(videoData, function (suspect) {
    return suspect.present;
});

let suspectsOnVideoNames = underscore.map(suspectsOnVideo, item => {return item.name});

console.log(suspectsOnVideoNames);
~~~

## The Spread Operator

:bulb: A Tuple is data structure that is a collection of arrays that contain two values each.

The spread operator takes all the remaining values and combines them into an array.

~~~js
const createTuple = (a, b, c, ...d) => {
  return [[a, c], [b, d]];
}
createTuple('It', 'be', 'could', 'anyone', 'noone'); // [['It', 'could'], ['be', ['anyone', 'noone']]];
~~~

## The Arguments Keyword

The arguments keyword is a sudo-array within a function that references all of the argument values. It is actually an object, so it doesn't have the hand methods associated with arrays.

The following code wouldn't work with Arrow functions because they don't have argument values.

~~~js
const createTuple = function (a, b, c, d) {
  console.log(arguments); // ['It', 'be', 'could', 'anyone', 'noone']
  return [[a, c], [b, d]];
}
createTuple('It', 'be', 'could', 'anyone', 'noone');
~~~

#### Default Parameters

The arguments keyword only shows arguments passed into the function invocation. Default parameters aren't included.

~~~js
const add = function (a, b = 2) {
  console.log(arguments); // ['3']
  return a + b;
}
add(3);
~~~

#### Default Parameters in ES5

~~~js
const add = function (a, b) {
  b = b || 2; // ES5 Default Parameter
  return a + b;
}
console.log(add(3)); // 5
~~~

#### Array-Like Object

The arguments keyword within a function is an sudo-array, so to turn it into an actual array we can pass the arguments object into `Array.prototype.slice.call()`.

`Array.join()` takes a character argument and then inserts that between all the array items and joins everything into a string.

~~~js
const constructArr = function () {
  const arr = Array.prototype.slice.call(arguments); 
  arr.push('the billiards room?');
  return arr.join(' '); // "Was it in the billiards room?"
}
constructArr('Was', 'it', 'in');
~~~

In ES6 `Array.prototype.slice.call()` has been replaced with `Array.from()`, so now the _arguments_ keyword can be converted to an actual array with the following statement: `Array.from(arguments)`.

This is also included in the underscore.js library as `_.from()`.

:bulb: Functions are also objects!

## Debugging

:bulb: You can type `debugger;` in JS code and when it executes it will open dev tools in the browser.

- The standard functions of a debugger are present, step over, step into, etc. 
- You can hover over elements to get their values and more information.
- You can use console as an immediate window.
- YOu can browse the scopes.

:bulb: If you go too far int he debugger you can click in the call stack and choose _Restart stack frame_ and it will go back to the beginning.








