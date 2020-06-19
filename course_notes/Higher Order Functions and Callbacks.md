---
tags: ['JavaScript: From Fundamentals to Functional JS']
title: Higher Order Functions and Callbacks
created: '2020-06-18T12:23:20.316Z'
modified: '2020-06-18T13:48:47.302Z'
---

# Higher Order Functions and Callbacks

:bulb: Higher order functions can take a function as an input, and return functions as an output.

#### Callbacks are just functions we pass to other functions.

When executing the code below the value returned from 'ifElse' is `function (){console.log(true);};`. This can be executed by calling `value();`, which would then enter 'true' into the console.

~~~js
const ifElse = (condition, isTrue, isFalse) => {
  return condition ? isTrue : isFalse; // Would return just the function
};
let value = ifElse(true,
  () => {console.log(true);},
  () => {console.log(false);}
); // function (){console.log(true);};
value(); // Logs true to the console
~~~

If we wanted to run the function straight away we would write it like this:

~~~js
const ifElse = (condition, isTrue, isFalse) => {
  return condition ? isTrue() : isFalse(); // Would execute the function immediately and return the value
};
const isTrue = () => {console.log(true);};
const isFalse = () => {console.log(false);};

ifElse(true, isTrue, isFalse); // Logs true to the console
~~~

### Passing Arguments

~~~js
var increment = function(n){return n + 1;};
var square = function(n){return n * n;};
var doMath = function(n, func){return func(n);}; // The higher order function

doMath(5, square); // 25
doMath(4, increment); // 5
~~~

#### The above code translated into ES6.

~~~js
const increment = n => n + 1;
const square = n => n * n;
const doMath = (n, fn) => fn(n);

doMath(5, square); // 25
doMath(4, increment); // 5
~~~

To pass arguments to callbacks you would just include them in the arguments of the higher order function.

~~~js
const ifElse = (condition, isTrue, isFalse, message) => {
  return condition ? isTrue(message) : isFalse(message);
};
const isTrue = (message) => {console.log(message + 'true!');}; 
const isFalse = (message) => {console.log(message + 'false!');};

ifElse(true, isTrue, isFalse, 'This is definitely '); // Logs 'This is definitely true!' to the console
~~~

Here we have added the parameter 'message' to both the isTrue and isFalse functions, which is being used within their function bodies. 

We have then included this as a parameter in the ifElse function, which is then used as a local variable within the function body and entered as arguments when invoking the isTrue or isFalse functions.

Lastly we include this argument when invoking the ifElse function.

#### The Rest Parameter

We can pass multiple arguments into the callbacks by using the rest parameter. This allows you to represent an indefinite number of arguments. 

~~~js
const ifElse = (condition, isTrue, isFalse, ...args) => {
  return condition ? isTrue(args) : isFalse(args); ;
};
const isTrue = (message) => {console.log(message.join(' ') + ' true!');}; 
const isFalse = (message) => {console.log(message.join(' ') + ' false!');};

ifElse(true, isTrue, isFalse, 'This', 'is', 'definitely'); // Logs 'This is definitely true!' to the console
~~~

These arguments can the be used as an array by referencing them as `args` or we can pass them again as multiple parameters using `...args`. 

~~~js
isTrue(args); // isTrue(args['This', 'is', 'definitely']); 
isFalse(...args); // isFalse('This', 'is', 'definitely');
~~~


|:bulb: How does this compare to the Spread Operator?|
|:---|
|The spread operator allows us to spread the value of an array (or any iterable) across zero or more arguments in a function or elements in an array (or any iterable). The rest parameter allows us to pass an indefinite number of parameters to a function and access them in an array.|

:bulb: Before ES6 we would have to use the arguments object using call, apply, and bind are some core methods.

Shown below using a mix of ES6 and ES5.

~~~js
const ifElse = (condition, isTrue, isFalse) => {
  const args = [].slice.call(arguments, 3)
  return condition ? isTrue.apply(this, args) : isFalse.apply(this, args);
}

const isTrue = (message) => {console.log(message);};
const isFalse = (message) => {console.log(message);};

ifElse(true, isTrue, isFalse, 'This', 'can', 'be', 'tricky!');
~~~





